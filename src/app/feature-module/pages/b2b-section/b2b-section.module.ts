import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B2bSectionRoutingModule } from './b2b-section-routing.module';
import { B2bSectionComponent } from './b2b-section.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    B2bSectionComponent
  ],
  imports: [
    CommonModule,
    B2bSectionRoutingModule,
    SharedModule
  ]
})
export class B2bSectionModule { }
