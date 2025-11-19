import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ModalComponent } from './common/modal/modal.component';
import { FormsModule } from "@angular/forms";
import { ViewCartComponent } from './view-cart/view-cart.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ViewCartComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    FormsModule,
    NgxImageZoomModule,
    SharedModule
]
})
export class FeatureModuleModule { }
