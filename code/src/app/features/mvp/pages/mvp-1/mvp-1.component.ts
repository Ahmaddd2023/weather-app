import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { GetWeather, GetForecast } from "../../store/mvp.actions";

import { MvpState } from "../../store/mvp.state";
import { MvpService } from "../../services/mvp.service";

@Component({
  selector: "app-mvp-1",
  templateUrl: "./mvp-1.component.html",
  styleUrls: ["./mvp-1.component.scss"],
})
export class Mvp1Component implements OnInit {
  @Select(MvpState.getWeather) weather$!: Observable<any>;
  @Select(MvpState.getForecast) forecast$!: Observable<any>;

  city: string = "";
  showWeatherScreen: boolean = false;
  hourlyForecast: any[] = [];
  firstForecast: any[] = [];
  suggestedCities: any[] = [];
  secondForecast: any[] = [];
  weeklyForecast: any[] = [];
  currentDate: string = "";
  errorMessage: string = "";
  showError: boolean = false;
  nextDate: string = "";
  suggestions: string[] = [];
  showFirstForecast: boolean = true;
  buttonText: string = "Next Forecast";

  constructor(private store: Store, private mvpService: MvpService) {}

  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();
  }

  getWeather() {
    if (!this.city.trim()) return;

    this.suggestedCities = [];

    this.store.dispatch(new GetWeather(this.city)).subscribe({
      next: () => {
        this.showWeatherScreen = true;
      },
      error: () => {
        this.showErrorMessage("Location not found, try again!");
      },
    });

    this.store.dispatch(new GetForecast(this.city)).subscribe({
      next: () => {
        this.forecast$.subscribe((forecast: any) => {
          if (!forecast || !forecast.list) {
            return;
          }

          const sortedForecast = forecast.list.sort(
            (a: any, b: any) =>
              new Date(a.dt_txt).getTime() - new Date(b.dt_txt).getTime()
          );

          this.firstForecast = sortedForecast.slice(0, 8).map((item: any) => {
            const time = item.dt_txt.split(" ")[1].slice(0, 5);
            return {
              temp: Math.round(item.main.temp),
              time,
              weather: item.weather,
              icon: this.getForecastIcon(item.weather[0]?.description, time),
            };
          });

          this.secondForecast = sortedForecast.slice(8, 16).map(
            (item: any) => {
              const time = item.dt_txt.split(" ")[1].slice(0, 5);
              return {
                temp: Math.round(item.main.temp),
                time,
                weather: item.weather,
                icon: this.getForecastIcon(item.weather[0]?.description, time),
              };
            }
          );

          this.nextDate = sortedForecast[8]?.dt_txt.split(" ")[0];
          this.hourlyForecast = [...this.firstForecast];
          this.weeklyForecast = this.getWeeklyForecast(forecast.list);
        });
      },
      error: () => {
        this.showErrorMessage("Location not found, try again!");
      },
    });
  }

  toggleForecast() {
    if (this.buttonText === "Next Forecast") {
      this.hourlyForecast = [...this.secondForecast];
      this.showFirstForecast = false;
      this.buttonText = "Home";
    } else {
      this.hourlyForecast = [];
      this.showFirstForecast = true;
      this.buttonText = "Next Forecast";
      this.showWeatherScreen = false;
      this.city = "";
      this.suggestedCities = [];
    }
  }

  getForecastIcon(description?: string, time?: string): string {
    if (!description) {
      return "/assets/img/sunny.svg";
    }

    const iconsMap: { [key: string]: string } = {
      "clear sky": "/assets/img/sunny.svg",
      "few clouds": "/assets/img/cloud.svg",
      "scattered clouds": "/assets/img/scattered-clouds.svg",
      "broken clouds": "/assets/img/scattered-clouds.svg",
      "overcast clouds": "/assets/img/cloud.svg",
      "shower rain": "/assets/img/rain.svg",
      "light snow": "/assets/img/lsnow.svg",
      rain: "/assets/img/rain.svg",
      thunderstorm: "/assets/img/thunderstorm.svg",
      snow: "/assets/img/snow.svg",
      mist: "/assets/img/mist.svg",
      "moderate rain": "/assets/img/drizzle.svg",
      "light rain": "/assets/img/drizzle.svg",
    };

    const hours = parseInt(time?.slice(0, 2) || "12", 10);

    if (hours < 6 || hours >= 21) {
      return "/assets/img/moon.svg";
    }

    return iconsMap[description.toLowerCase()] || "/assets/img/sunny.svg";
  }

  getWeeklyForecastIcon(description?: string): string {
    if (!description) {
      return "/assets/img/sunny.svg";
    }

    const weeklyIconsMap: { [key: string]: string } = {
      "clear sky": "/assets/img/sunny.svg",
      "few clouds": "/assets/img/cloud.svg",
      "scattered clouds": "/assets/img/scattered-clouds.svg",
      "broken clouds": "/assets/img/scattered-clouds.svg",
      "overcast clouds": "/assets/img/cloud.svg",
      "shower rain": "/assets/img/rain.svg",
      rain: "/assets/img/rain.svg",
      thunderstorm: "/assets/img/thunderstorm.svg",
      snow: "/assets/img/snow.svg",
      mist: "/assets/img/mist.svg",
      "moderate rain": "/assets/img/drizzle.svg",
      "light rain": "/assets/img/drizzle.svg",
    };

    return weeklyIconsMap[description.toLowerCase()] || "/assets/img/sunny.svg";
  }

  getWeatherIcon(weather: any): string {
    if (!weather || !weather.weather || weather.weather.length === 0) {
      return "/assets/img/sunny.svg";
    }

    const condition = weather.weather[0]?.main || "Clear";
    const iconsMap: { [key: string]: string } = {
      Clouds: "/assets/img/cloud.svg",
      Rain: "/assets/img/rain.svg",
      Snow: "/assets/img/snow.svg",
      Thunderstorm: "/assets/img/thunder.svg",
      Drizzle: "/assets/img/drizzle.svg",
      Mist: "/assets/img/mist.svg",
      Fog: "/assets/img/fog.svg",
    };

    return condition !== "Clear"
      ? iconsMap[condition] || "/assets/img/sunny.svg"
      : this.getDayNightIcon(weather);
  }

  getDayNightIcon(weather: any): string {
    const currentTime = Math.floor(Date.now() / 1000);
    const sunrise = weather?.sys?.sunrise || currentTime;
    const sunset = weather?.sys?.sunset || currentTime;

    return currentTime < sunrise || currentTime > sunset
      ? "/assets/img/moon.svg"
      : "/assets/img/sunny.svg";
  }

  getCurrentDate(): string {
    return new Date()
      .toLocaleDateString("en-US", { month: "short", day: "numeric" })
      .replace(" ", ", ");
  }

  getWeeklyForecast(forecastList: any[]): any[] {
    const dailyForecast: { [key: string]: any } = {};

    forecastList.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      const description = item.weather[0]?.description;
      const icon = this.getWeeklyForecastIcon(description);

      dailyForecast[date] = {
        date,
        minTemp: Math.round(item.main.temp_min),
        maxTemp: Math.round(item.main.temp_max),
        humidity: item.main.humidity,
        pop: item.pop || 0,
        icon,
        description,
      };
    });

    return Object.values(dailyForecast).slice(1, 6);
  }

  onCityInput() {
    if (this.city.length < 2) {
      this.suggestedCities = [];
      return;
    }

    this.mvpService.searchCities(this.city).subscribe(
      (cities) => (this.suggestedCities = cities),
      () => (this.suggestedCities = [])
    );
  }

  selectCity(cityName: string) {
    this.city = cityName;
    this.suggestedCities = [];
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    this.showError = true;
    setTimeout(() => (this.showError = false), 5000);
  }
}
