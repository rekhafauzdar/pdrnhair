import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBrandsRoutingModule } from './all-brands-routing.module';
import { AllBrandsComponent } from './all-brands.component';


@NgModule({
  declarations: [
    AllBrandsComponent
  ],
  imports: [
    CommonModule,
    AllBrandsRoutingModule
  ]
})
export class AllBrandsModule { }
