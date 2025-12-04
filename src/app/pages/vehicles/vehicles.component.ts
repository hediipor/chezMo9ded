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

  filter: 'all' | 'hot' | 'promo' | 'new' = 'all';
  vehicles: Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

  setFilter(type: 'all' | 'hot' | 'promo' | 'new') {
    this.filter = type;
  }

  get filteredVehicles() {
    if (this.filter === 'all') return this.vehicles;
    return this.vehicles.filter(v => v.tag === this.filter);
  }

  openRentPage(vehicle: Vehicle) {
    this.router.navigate(['/rent'], { queryParams: { id: vehicle.id } });
  }
}
