import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  // FILTER LOGIC
  filter: 'all' | 'hot' | 'promo' | 'new' = 'all';
  vehicles: Vehicle[] = [];

  // POPUP LOGIC
  showPopup: boolean = false;
  selectedCar: Vehicle | null = null;

  constructor(
    private vehicleService: VehicleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

  // FILTERS
  setFilter(type: 'all' | 'hot' | 'promo' | 'new') {
    this.filter = type;
  }

  get filteredVehicles() {
    if (this.filter === 'all') return this.vehicles;
    return this.vehicles.filter(v => v.tag === this.filter);
  }

  // ===========================
  // POPUP FUNCTIONS
  // ===========================

  openPopup(car: Vehicle) {
    this.selectedCar = car;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedCar = null;
  }

  rentThisCar() {
    if (!this.selectedCar) return;

    this.router.navigate(['/rent-a-car'], {
      queryParams: { id: this.selectedCar.id }
    });
  }
}
