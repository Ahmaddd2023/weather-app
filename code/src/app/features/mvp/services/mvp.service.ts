import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../environment/environment";

@Injectable({
  providedIn: "root",
})
export class MvpService {
  private cache = new Map<string, { timestamp: number; data: any }>();

  constructor(private http: HttpClient) {
    this.loadCache();
  }

  getWeather(city: string): Observable<any> {
    if (!city.trim()) return of(null);

    const cacheKey = `weather-${city.toLowerCase()}`;
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < 600000) {
      console.log(`Loading weather from cache for ${city}`);
      return of(cached.data);
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${environment.weatherApiKey}&units=metric`;

    return this.http.get(url).pipe(tap((data) => this.saveToCache(cacheKey, data)));
  }

  getForecast(city: string): Observable<any> {
    if (!city.trim()) return of(null);

    const cacheKey = `forecast-${city.toLowerCase()}`;
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < 600000) {
      console.log(`Loading the forecast from the cache for ${city}`);
      return of(cached.data);
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      city
    )}&appid=${environment.weatherApiKey}&units=metric`;

    return this.http.get(url).pipe(tap((data) => this.saveToCache(cacheKey, data)));
  }

  private saveToCache(key: string, data: any) {
    const cacheItem = { timestamp: Date.now(), data };
    this.cache.set(key, cacheItem);
    localStorage.setItem(
      "weatherCache",
      JSON.stringify(Array.from(this.cache.entries()))
    );
  }

  private loadCache() {
    const savedCache = localStorage.getItem("weatherCache");
    if (savedCache) {
      const parsedCache = new Map<string, { timestamp: number; data: any }>(
        JSON.parse(savedCache)
      );

      parsedCache.forEach((value: any, key: string) => {
        if (Date.now() - value.timestamp < 600000) {
          this.cache.set(key, value);
        }
      });
    }
  }

  searchCities(query: string): Observable<any[]> {
    if (!query.trim()) return of([]);

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      query
    )}&limit=5&appid=${environment.weatherApiKey}`;

    return this.http.get<any[]>(url);
  }
}
