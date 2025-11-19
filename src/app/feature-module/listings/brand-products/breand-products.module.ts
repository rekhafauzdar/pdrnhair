import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrandProductsRoutingModule } from './brand-products-routing.module';
import { BrandProductsComponent } from './brand-products.component';


@NgModule({
  declarations: [
    BrandProductsComponent
  ],
  imports: [
    CommonModule,
    BrandProductsRoutingModule,
    SharedModule
  ]
})
export class BrandProductsModule { }