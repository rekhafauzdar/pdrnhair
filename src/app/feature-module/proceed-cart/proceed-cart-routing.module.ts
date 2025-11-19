import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceedCartComponent } from './proceed-cart.component';

const routes: Routes = [
  {path:'', component:ProceedCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProceedCartRoutingModule { }
