import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-cancellation',
  templateUrl: './return-cancellation.component.html',
  styleUrl: './return-cancellation.component.css'
})
export class ReturnCancellationComponent {
constructor(private fb: FormBuilder) {}

  returnForm = this.fb.group({
    orderId: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    reason: ['', [Validators.required, Validators.minLength(10)]],
    acceptPolicy: [false, [Validators.requiredTrue]]
  });

  submitting = false;
  submitted = false;

  onSubmit() {
    if (this.returnForm.invalid) {
      this.returnForm.markAllAsTouched();
      return;
    }
    this.submitting = true;

    // simulate submit
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.returnForm.reset();
    }, 600);
  }

  get f() { return this.returnForm.controls; }
}
