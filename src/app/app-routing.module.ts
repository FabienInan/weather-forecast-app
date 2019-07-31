import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'weather-forecast' },
  {
    path: 'weather-forecast',
    loadChildren: () => import('./weather-forecast/weather-forecast.module').then(m => m.WeatherForecastModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
