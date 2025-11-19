import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AffiliateInquiryComponent } from './affiliate-inquiry.component';
import { AffiliateInquiryRoutingModule } from './affiliate-inquiry-routing.module';


@NgModule({
  declarations: [
    AffiliateInquiryComponent
  ],
  imports: [
    CommonModule,
    AffiliateInquiryRoutingModule,
    SharedModule
  ]
})
export class AffiliateInquiryModule { }