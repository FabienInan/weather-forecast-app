import { Component, Input } from '@angular/core';
import { WeatherForecast } from '../../core/model/WeatherForecast';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
    @Input() weatherForecast: WeatherForecast;
}