import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingOrderComponent } from './tracking-order.component';

const routes: Routes = [
  {path:'', component:TrackingOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingOrderRoutingModule { }
