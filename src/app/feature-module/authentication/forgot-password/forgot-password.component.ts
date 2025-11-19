import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  public routes = routes;
  otpVisible = false;
  sendingOtp = false;
  otpSent = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    otp: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{6}$/)]],
  });


  constructor(private fb: FormBuilder) {}

  touched(control: string) {
    const c = this.form.get(control);
    return !!(c && (c.touched || c.dirty));
  }

  invalid(control: string) {
    const c = this.form.get(control);
    return !!(c && c.invalid);
  }

  sendOtp() {
    const emailCtrl = this.form.get('email');
    emailCtrl?.markAsTouched();
    emailCtrl?.updateValueAndValidity();

    if (emailCtrl?.invalid) return;

    // Simulate sending OTP
    this.sendingOtp = true;

    // In real app, call API then handle success/error.
    setTimeout(() => {
      this.sendingOtp = false;
      this.otpSent = true;
      this.otpVisible = true;
      this.form.get('otp')?.enable();
      // Optional: lock email once OTP is sent
      emailCtrl?.disable();
    }, 600); // mock delay
  }

  forgotPassword() {
    // Mark all as touched for validation
    Object.values(this.form.controls).forEach(c => {
      c.enable({ emitEvent: false }); // ensure validation runs on disabled controls too
      c.markAsTouched();
      c.updateValueAndValidity();
    });

    if (this.form.invalid) return;

    // Submit payload
    const payload = {
      email: this.form.getRawValue().email,
      otp: this.form.getRawValue().otp,
    };

    // TODO: call your API with `payload`
    // this.authService.resetWithOtp(payload).subscribe(...)
  }
}
