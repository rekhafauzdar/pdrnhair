import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocialContributionComponent } from './social-contribution.component';
import { SocialContributionRoutingModule } from './social-contribution-routing.module';


@NgModule({
  declarations: [
    SocialContributionComponent
  ],
  imports: [
    CommonModule,
    SocialContributionRoutingModule,
    SharedModule
  ]
})
export class SocialContributionModule { }