import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingDetailsRoutingModule } from './listing-details-routing.module';
import { ListingDetailsComponent } from './listing-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    ListingDetailsRoutingModule,
    SharedModule,
    NgxImageZoomModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ListingDetailsModule { }
