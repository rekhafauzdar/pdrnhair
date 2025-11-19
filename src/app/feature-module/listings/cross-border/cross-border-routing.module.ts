import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossBorderComponent } from './cross-border.component';

const routes: Routes = [{ path: '', component: CrossBorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrossBorderRoutingModule { }