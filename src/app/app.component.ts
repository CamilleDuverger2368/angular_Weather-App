import { Component } from "@angular/core"
import { WeatherAppComponent } from "./weather-app/weather-app.component"

@Component({

  selector: "app-root",
  standalone: true,
  imports: [
    WeatherAppComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})

export class AppComponent {


}
