import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingOrderRoutingModule } from './tracking-order-routing.module';
import { TrackingOrderComponent } from './tracking-order.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrackingOrderComponent
  ],
  imports: [
    CommonModule,
    TrackingOrderRoutingModule,
    SharedModule
  ]
})
export class TrackingOrderModule { }
