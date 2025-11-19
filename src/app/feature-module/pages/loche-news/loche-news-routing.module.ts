import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocheNewsComponent } from './loche-news.component';

const routes: Routes = [
  {
    path:'', component: LocheNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  LocheNewsRoutingModule { }