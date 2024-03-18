import { Component } from "@angular/core"
import { WeatherService } from "../weather.service"
import { NgIf } from "@angular/common"

@Component({

  selector: "app-geoloc",
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: "./geoloc.component.html",
  styleUrl: "./geoloc.component.css"
})

export class GeolocComponent {

  error?: string

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

    this.error = this.weatherService.getError()
  }

  ngDoCheck(): void {

    this.error = this.weatherService.getError()
  }

  geoloc(): void {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition( position => {

        const place = position.coords.latitude + ", " + position.coords.longitude
        this.weatherService.getPositionWeather(place, "geoloc")
      })
    } else {

        this.error = "La geolocation n'est pas supportée par ce navigateur."
    }
  }
}
