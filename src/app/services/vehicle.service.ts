import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Skoda Fabia',
      brand: 'Skoda',
      pricePerDay: 23,
      seats: 5,
      transmission: 'manual',
      luggage: 2,
      fuel: 'yes',
      imageUrl: 'assets/images/cars/fabia.png',
      tag: 'promo'
    },
    {
      id: 2,
      name: 'Volkswagen Polo',
      brand: 'Volkswagen',
      pricePerDay: 25,
      seats: 5,
      transmission: 'manual',
      luggage: 2,
      fuel: 'yes',
      imageUrl: 'assets/images/cars/polo.png',
      tag: 'hot'
    },
    {
      id: 3,
      name: 'Hyundai i10',
      brand: 'Hyundai',
      pricePerDay: 27,
      seats: 5,
      transmission: 'manual',
      luggage: 2,
      fuel: 'yes',
      imageUrl: 'assets/images/cars/i10.png',
      tag: 'new'
    }
  ];

  getVehicles() {
    return this.vehicles;
  }

  getVehicleById(id: number) {
    return this.vehicles.find(v => v.id === id);
  }
}
