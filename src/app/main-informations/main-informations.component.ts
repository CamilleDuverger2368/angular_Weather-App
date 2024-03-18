import { Component, Input } from "@angular/core"

@Component({

  selector: "app-main-informations",
  standalone: true,
  imports: [],
  templateUrl: "./main-informations.component.html",
  styleUrl: "./main-informations.component.css"
})

export class MainInformationsComponent {

  @Input() date: string = ''
  @Input() minTemp: number = 0
  @Input() temp: number = 0
  @Input() maxTemp: number = 0
  @Input() conditions: string = ''
}
