import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CeoGreetingComponent } from './ceo-greeting.component';
import { CeoGreetingRoutingModule } from './ceo-greeting-routing.module';


@NgModule({
  declarations: [
    CeoGreetingComponent
  ],
  imports: [
    CommonModule,
    CeoGreetingRoutingModule,
    SharedModule
  ]
})
export class CeoGreetingModule { }