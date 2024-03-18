import { Component } from "@angular/core"
import { NgIf, NgFor } from "@angular/common"
import { WeatherService } from "../weather.service"
import { Weather } from "../weather"
import { MainInformationsComponent } from "../main-informations/main-informations.component"
import { SecondaryInformationsComponent } from "../secondary-informations/secondary-informations.component"

@Component({

  selector: "app-weather",
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MainInformationsComponent,
    SecondaryInformationsComponent
  ],
  templateUrl: "./weather.component.html",
  styleUrl: "./weather.component.css"
})

export class WeatherComponent {

  weather: Weather = { city: '', res: null}
  today: any
  week: any

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

    this.weather = this.weatherService.getWeather()

    this.today = this.weather.res.values[0]
    this.today.temp = this.weather.res.currentConditions.temp
    this.today.sunrise = this.weather.res.currentConditions.sunrise
    this.today.sunset = this.weather.res.currentConditions.sunset
    this.today.date = new Date(this.today.datetimeStr)
    this.today.sunrise = new Date(this.today.sunrise)
    this.today.sunset = new Date(this.today.sunset)

    this.week = [...this.weather.res.values]
    this.week.splice(0, 1)
    this.week.splice(7, 8)
    this.week.map( (day: any) => day.date = new Date(day.datetimeStr) )
  }

  return(): void {

    this.weatherService.resetWeather()
  }
}
