import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalStoreRoutingModule } from './global-store-routing.module';
import { GlobalStoreComponent } from './global-store.component';


@NgModule({
  declarations: [GlobalStoreComponent],
  imports: [
    CommonModule,
    GlobalStoreRoutingModule
  ]
})
export class GlobalStoreModule { }
