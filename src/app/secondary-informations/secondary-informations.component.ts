import { Component, Input } from "@angular/core"

@Component({

  selector: "app-secondary-informations",
  standalone: true,
  imports: [],
  templateUrl: "./secondary-informations.component.html",
  styleUrl: "./secondary-informations.component.css"
})

export class SecondaryInformationsComponent {

  @Input() sunRise: string = ''
  @Input() sunSet: string = ''
  @Input() humidity: number = 0
  @Input() windSpeed: number = 0
  @Input() precipitation: number = 0
}
