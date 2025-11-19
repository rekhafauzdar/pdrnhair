import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingCheckoutRoutingModule } from './booking-checkout-routing.module';
import { BookingCheckoutComponent } from './booking-checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingCheckoutComponent
  ],
  imports: [
    CommonModule,
    BookingCheckoutRoutingModule,
    SharedModule
  ]
})
export class BookingCheckoutModule { }
