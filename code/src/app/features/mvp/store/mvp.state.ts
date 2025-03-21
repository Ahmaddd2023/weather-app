import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GetWeather, GetForecast } from './mvp.actions';
import { tap } from 'rxjs/operators';
import { MvpService } from '../services/mvp.service';

export interface MvpStateModel {
  weather: any;
  forecast: any;
}

@State<MvpStateModel>({
  name: 'mvp',
  defaults: {
    weather: null,
    forecast: null
  }
})
@Injectable()
export class MvpState {
  constructor(private mvpService: MvpService) {}

  @Selector()
  static getWeather(state: MvpStateModel) {
    return state.weather;
  }

  @Selector()
  static getForecast(state: MvpStateModel) {
    return state.forecast;
  }

  @Action(GetWeather)
  getWeather(ctx: StateContext<MvpStateModel>, action: GetWeather) {
    return this.mvpService.getWeather(action.city).pipe(
      tap((weather) => {
        ctx.patchState({ weather });
      })
    );
  }

  @Action(GetForecast)
  getForecast(ctx: StateContext<MvpStateModel>, action: GetForecast) {
    return this.mvpService.getForecast(action.city).pipe(
      tap((forecast) => {
        ctx.patchState({ forecast });
      })
    );
  }
}
