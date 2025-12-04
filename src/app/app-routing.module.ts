import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { RentComponent } from './pages/rent/rent.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // BROWSE VEHICLES PAGE
  { path: 'vehicles', component: VehiclesComponent },

  // RENT FORM PAGE (must stay as a separate page)
  { path: 'rent-a-car', component: RentComponent },

  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

