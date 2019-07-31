import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import { WeatherForecast } from '../../core/model/WeatherForecast';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

    weatherForecastList: WeatherForecast[] = [];

    constructor(private weatherForecastService: WeatherForecastService ) {}

    ngOnInit() {
        this.weatherForecastService.getWeatherForecast('Vancouver', 'ca')
            .subscribe(result => {
                result.list.slice(0, 16).forEach( (elem) => {
                    this.weatherForecastList.push(
                        new WeatherForecast(elem.dt, elem.main.temp, elem.weather[0].main, elem.weather[0].description));
            });
        });
    }
}