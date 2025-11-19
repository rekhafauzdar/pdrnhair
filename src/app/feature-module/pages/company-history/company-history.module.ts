import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyHistoryComponent } from './company-history.component';
import { CompanyHistoryRoutingModule } from './company-history-routing.module';


@NgModule({
  declarations: [
    CompanyHistoryComponent
  ],
  imports: [
    CommonModule,
    CompanyHistoryRoutingModule,
    SharedModule
  ]
})
export class CompanyHistoryModule { }