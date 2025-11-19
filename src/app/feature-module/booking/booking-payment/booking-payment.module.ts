import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingPaymentRoutingModule } from './booking-payment-routing.module';
import { BookingPaymentComponent } from './booking-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingPaymentComponent
  ],
  imports: [
    CommonModule,
    BookingPaymentRoutingModule,
    SharedModule
  ]
})
export class BookingPaymentModule { }
