import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from '../home3/common/header/header.component';
import { FooterComponent } from '../home3/common/footer/footer.component';



@NgModule({
  declarations: [
    Home3Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home3RoutingModule,
    SharedModule
  ]
})
export class Home3Module { }
