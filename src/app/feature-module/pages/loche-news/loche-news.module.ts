import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocheNewsRoutingModule } from './loche-news-routing.module';
import { LocheNewsComponent } from './loche-news.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LocheNewsComponent],
  imports: [
    CommonModule,
    LocheNewsRoutingModule,
    SharedModule
  ]
})
export class LocheNewsModule { }