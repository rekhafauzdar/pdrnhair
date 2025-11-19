import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { MyOrderComponent } from './my-order.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyOrderComponent
  ],
  imports: [
    CommonModule,
    MyOrderRoutingModule,
    SharedModule
  ]
})
export class MyOrderModule { }
