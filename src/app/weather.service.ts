import { Injectable } from "@angular/core"
import { environment } from "../environments/environment.development"
import axios from "axios"
import { Weather } from "./weather"

@Injectable({

  providedIn: "root"
})

export class WeatherService {

  weather: Weather = { city: '', res: null }
  error: string = ''

  getWeather(): Weather {

    return(this.weather)
  }

  resetWeather(): void {

    this.weather = { city: '', res: null }
  }

  getError(): string {

    return(this.error)
  }

  getPositionWeather(city: string, origin: string) {

    const options = {

        method: "GET",
        url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
        params: {

            location: city,
            aggregateHours: "24",
            shortColumnNames: false,
            unitGroup: "metric",
            contentType: "json"
        },
        headers: {

            "X-RapidAPI-Key": environment.REACT_APP_X_RAPID_API_KEY,
            "X-RapidAPI-Host": environment.REACT_APP_X_RAPID_API_HOST
        }
    }

    axios.request(options)
         .then( res => {

            if (res.data.locations[city]) {

              if (origin === "add-city") {

                this.weather.city = city
              }
              this.weather.res = res.data.locations[city]
            } else {

              this.error = "Votre lieu de recherche est sans doute trop flou..."
            }
         })
  }
}
