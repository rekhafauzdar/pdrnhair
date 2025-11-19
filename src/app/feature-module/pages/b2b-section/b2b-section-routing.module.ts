import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bSectionComponent } from './b2b-section.component';

const routes: Routes = [
  {path:'', component:B2bSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2bSectionRoutingModule { }
