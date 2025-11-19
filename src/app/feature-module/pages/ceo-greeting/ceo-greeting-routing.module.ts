import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeoGreetingComponent } from './ceo-greeting.component';

const routes: Routes = [
  {path:"", component:CeoGreetingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeoGreetingRoutingModule { }
