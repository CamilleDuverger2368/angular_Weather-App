import { Component } from "@angular/core"
import { FormsModule, NgForm } from "@angular/forms"
import { NgIf } from "@angular/common"
import { WeatherService } from "../weather.service"

@Component({

  selector: "app-add-city",
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: "./add-city.component.html",
  styleUrl: "./add-city.component.css"
})

export class AddCityComponent {

  error?: string

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

    this.error = this.weatherService.getError()
  }

  ngDoCheck(): void {

    this.error = this.weatherService.getError()
  }

  onSubmit(form: NgForm) {

    this.weatherService.getPositionWeather(form.value.city, "add-city")
  }
}