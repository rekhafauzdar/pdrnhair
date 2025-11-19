import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingAdonRoutingModule } from './booking-adon-routing.module';
import { BookingAdonComponent } from './booking-adon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingAdonComponent
  ],
  imports: [
    CommonModule,
    BookingAdonRoutingModule,
    SharedModule
  ]
})
export class BookingAdonModule { }
