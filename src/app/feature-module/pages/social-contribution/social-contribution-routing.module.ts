import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialContributionComponent } from './social-contribution.component';

const routes: Routes = [
  {path:"", component:SocialContributionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialContributionRoutingModule { }
