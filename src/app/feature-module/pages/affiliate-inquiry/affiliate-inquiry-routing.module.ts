import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateInquiryComponent } from './affiliate-inquiry.component';

const routes: Routes = [{ path: '', component: AffiliateInquiryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateInquiryRoutingModule { }