import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandProductsComponent } from './brand-products.component';

const routes: Routes = [{ path: '', component: BrandProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandProductsRoutingModule { }