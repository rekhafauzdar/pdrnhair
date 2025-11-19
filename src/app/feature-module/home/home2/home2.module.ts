import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from '../home2/common/header/header.component';
import { FooterComponent } from '../home2/common/footer/footer.component';



@NgModule({
  declarations: [
    Home2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    SharedModule
  ]
})
export class Home2Module { }
