import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(LoginComponent) login!: LoginComponent;

  openLogin() {
    this.login.open();
  }
}
