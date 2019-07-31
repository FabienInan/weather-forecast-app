import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastService } from './weather-forecast.service';

const routes: Routes = [
  {
    path: '',
    component: WeatherForecastComponent,
  }
];

@NgModule({
  providers: [WeatherForecastService],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  exports: [RouterModule, WeatherForecastComponent],
  declarations: [WeatherForecastComponent, WeatherCardComponent]
})
export class WeatherForecastModule {}