import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrossBorderRoutingModule } from './cross-border-routing.module';
import { CrossBorderComponent } from './cross-border.component';


@NgModule({
  declarations: [
    CrossBorderComponent
  ],
  imports: [
    CommonModule,
    CrossBorderRoutingModule,
    SharedModule
  ]
})
export class CrossBorderModule { }