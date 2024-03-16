import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CarComponent } from "./components/car/car.component";
import { BrandComponent } from "./components/brand/brand.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NaviComponent, CarComponent, BrandComponent]
})
export class AppComponent {
  title : string = 'CarRentalFrontEnd';
  user : string = "Doruk Guler";
}
