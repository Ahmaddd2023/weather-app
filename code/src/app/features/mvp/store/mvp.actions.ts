export class UploadImage {
  static readonly type = '[Mvp] Upload image';
  constructor(public files: FormData[]) {}
}

export class GetWeather {
  static readonly type = '[Mvp] Get Weather';
  constructor(public city: string) {}
}

export class GetForecast {
  static readonly type = '[Mvp] Get Forecast';
  constructor(public city: string) {}
}
