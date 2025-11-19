import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bRoutingModule } from './b2b-routing.module';
import { B2bComponent } from './b2b.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    B2bComponent
  ],
  imports: [
    CommonModule,
    B2bRoutingModule,
    SharedModule
  ]
})
export class B2bModule { }
