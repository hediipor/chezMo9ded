import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {vehiclesComponent} from './pages/vehicles/vehicles.component';
import {rentComponent} from './pages/rent/rent.component';
import {contactComponent} from './pages/contact/contact.component';
import {loginComponent} from './auth/login/login.component';
import {signupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vehicles', component:vehiclesComponent },
  { path: 'rent-a-car', component:rentComponent },
  { path: 'contact-us', component:contactComponent },
  { path: 'login', component:loginComponent },
  { path: 'signup', component:signupComponent },
  { path: '**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
