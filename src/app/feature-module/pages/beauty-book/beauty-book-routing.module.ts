import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyBookComponent } from './beauty-book.component';

const routes: Routes = [
  {path:"", component:BeautyBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeautyBookRoutingModule { }
