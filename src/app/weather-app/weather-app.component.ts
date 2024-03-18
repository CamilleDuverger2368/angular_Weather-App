import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { NgIf } from "@angular/common"
import { WeatherService } from "../weather.service"
import { AddCityComponent } from "../add-city/add-city.component"
import { GeolocComponent } from "../geoloc/geoloc.component"
import { WeatherComponent } from "../weather/weather.component"

@Component({

  selector: "app-weather-app",
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    AddCityComponent,
    GeolocComponent,
    WeatherComponent
  ],
  templateUrl: "./weather-app.component.html",
  styleUrl: "./weather-app.component.css"
})

export class WeatherAppComponent {

  asking: boolean = true

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

    this.getAsking()
  }

  ngDoCheck(): void {

    this.getAsking()
  }

  getAsking(): void {

    let weather = this.weatherService.getWeather()
    weather.res === null  ? this.asking = true : this.asking = false
  }
}
