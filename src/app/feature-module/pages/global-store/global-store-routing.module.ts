import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalStoreComponent } from './global-store.component';

const routes: Routes = [
  {
    path:'', component:GlobalStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalStoreRoutingModule { }
