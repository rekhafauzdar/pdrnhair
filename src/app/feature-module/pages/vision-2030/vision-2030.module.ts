import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Vision2030Component } from './vision-2030.component';
import { Vision2030RoutingModule } from './vision-2030-routing.module';


@NgModule({
  declarations: [
    Vision2030Component
  ],
  imports: [
    CommonModule,
    Vision2030RoutingModule,
    SharedModule
  ]
})
export class Vision2030Module { }