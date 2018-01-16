import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  private cars= [];
  message = 'hello';

  constructor(private _carService: CarServiceService) {
    this.cars = this._carService.getCars();
  }

  ngOnInit() {
  }

}
