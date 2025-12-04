import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./auth-popups.css'] // shared palette file (see below)
})
export class LoginComponent {
  loading = false;

  form = this.fb.group({
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  open() {
    const el = document.getElementById('loginModal');
    if (!el) return;
    bootstrap.Modal.getOrCreateInstance(el).show();
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;

    // TODO: call AuthService.login(...)
    setTimeout(() => {
      this.loading = false;
      const el = document.getElementById('loginModal');
      if (el) bootstrap.Modal.getOrCreateInstance(el).hide();
      console.log('login payload', this.form.value);
    }, 500);
  }

  openSignup(e: Event) {
    e.preventDefault();

    const loginEl = document.getElementById('loginModal');
    if (loginEl) bootstrap.Modal.getOrCreateInstance(loginEl).hide();

    const signupEl = document.getElementById('signupModal');
    if (signupEl) bootstrap.Modal.getOrCreateInstance(signupEl).show();
  }
}
