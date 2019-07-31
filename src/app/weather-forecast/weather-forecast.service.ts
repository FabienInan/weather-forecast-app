import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherForecast } from '../core/model/WeatherForecast';

@Injectable()
export class WeatherForecastService {

    baseUrl: string = "http://api.openweathermap.org/data/2.5/";

    apiKey: string = "7009bcea4de141b92f141cd1a7021ae9";

    constructor(private httpClient: HttpClient) {}

    getWeatherForecast(city: string, country: string): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/forecast?q=${city},${country}&units=metric&APPID=${this.apiKey}`);
    }

}