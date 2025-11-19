import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeautyBookRoutingModule } from './beauty-book-routing.module';
import { BeautyBookComponent } from './beauty-book.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BeautyBookComponent
  ],
  imports: [
    CommonModule,
    BeautyBookRoutingModule,
    SharedModule
  ]
})
export class BeautyBookModule { }
