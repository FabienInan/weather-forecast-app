import * as moment from 'moment';

export class WeatherForecast {
    date: string;
    temperatureInCelsius: number;
    weatherType: string;
    weatherDescription: string;

    constructor(date: number, temperatureInCelsius: number, weatherType: string, weatherDescription: string) {
        this.date = moment.unix(date).format('dddd hhA');
        this.temperatureInCelsius = Math.round(temperatureInCelsius);
        this.weatherType = weatherType.toLowerCase();
        this.weatherDescription = weatherDescription;
    }
}