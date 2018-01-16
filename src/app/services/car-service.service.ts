import { Injectable } from '@angular/core';

@Injectable()
export class CarServiceService {
  private cars;
  private idCount;
  private newCar={};

  constructor() {
    this.cars = [
      {
        id: 1,
        mark: 'Mercedes',
        model: 'S Class',
        year: 2016,
        maxSpeed: 240,
        isAutomatic: true,
        engine: 'Diesel',
        numberOfDoors: 5
      },
      {
        id: 2,
        mark: 'BMW',
        model: 'X6',
        year: 2015,
        maxSpeed: 250,
        isAutomatic: true,
        engine: 'Diesel',
        numberOfDoors: 5
      },
      {
        id: 3,
        mark: 'Audi',
        model: 'Q7',
        year: 2017,
        maxSpeed: 260,
        isAutomatic: true,
        engine: 'Diesel',
        numberOfDoors: 5
      }
    ];
  }

  public getCars()
  {
    return this.cars;
  }

  // public addCar(newCar){
  //   this.newCar.push.cars;
  //   this.idCount++;
  // }
  

}
