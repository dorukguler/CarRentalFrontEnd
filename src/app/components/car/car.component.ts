import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars: Car[] =[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
