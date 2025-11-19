import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnCancellationRoutingModule } from './return-cancellation-routing.module';
import { ReturnCancellationComponent } from './return-cancellation.component';


@NgModule({
  declarations: [
    ReturnCancellationComponent
  ],
  imports: [
    CommonModule,
    ReturnCancellationRoutingModule
  ]
})
export class ReturnCancellationModule { }
