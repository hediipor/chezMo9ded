import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {

  selectedCar: Vehicle | undefined;

  // Form model
  booking = {
    pickupDate: '',
    pickupTime: '10:00',
    dropoffDate: '',
    dropoffTime: '10:00',
    driverName: '',
    driverAge: '',
    gps: false,
    babySeat: false,
    insurance: 'standard',
  };

  constructor(
    private route: ActivatedRoute,
    public vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedCar = this.vehicleService.getVehicleById(+id);
      }
    });
  }

  getTotalPrice() {
    if (!this.selectedCar) return 0;
    let base = this.selectedCar.pricePerDay;

    if (this.booking.gps) base += 5;
    if (this.booking.babySeat) base += 8;
    if (this.booking.insurance === 'premium') base += 12;

    return base;
  }

  confirmBooking() {
    console.log("Booking:", this.booking);
    alert("Booking Confirmed!");
  }
}
