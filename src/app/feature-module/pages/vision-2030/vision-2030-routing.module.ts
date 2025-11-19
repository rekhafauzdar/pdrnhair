import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vision2030Component } from './vision-2030.component';

const routes: Routes = [
  {path:"", component:Vision2030Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vision2030RoutingModule { }
