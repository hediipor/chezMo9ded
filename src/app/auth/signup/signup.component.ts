import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./auth-popups.css']
})
export class SignupComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.form.invalid) return;

    // TODO: call AuthService.signup(...)
    console.log('signup payload', this.form.value);

    const el = document.getElementById('signupModal');
    if (el) bootstrap.Modal.getOrCreateInstance(el).hide();
  }

  openLogin(e: Event) {
    e.preventDefault();

    const signupEl = document.getElementById('signupModal');
    if (signupEl) bootstrap.Modal.getOrCreateInstance(signupEl).hide();

    const loginEl = document.getElementById('loginModal');
    if (loginEl) bootstrap.Modal.getOrCreateInstance(loginEl).show();
  }
}
