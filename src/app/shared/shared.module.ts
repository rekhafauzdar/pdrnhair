import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { materialModule } from './material.module';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GoogleMapsModule } from '@angular/google-maps';
import { LightgalleryModule } from 'lightgallery/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxImageZoomModule } from 'ngx-image-zoom';




@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    materialModule,
    CountUpModule,
    CarouselModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    SlickCarouselModule,
    LightboxModule,
    TimepickerModule,
    MatSliderModule,
    NgxSpinnerModule,
    MatSortModule,
    CustomPaginationModule,
    MatTooltipModule,
    GoogleMapsModule,
    LightgalleryModule,
    FullCalendarModule,
    NgxImageZoomModule,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    materialModule,
    CountUpModule,
    CarouselModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    LightboxModule,
    TimepickerModule,
    MatSliderModule,
    MatSortModule,
    BsDatepickerModule,
    CustomPaginationModule,
    MatTooltipModule,
    GoogleMapsModule,
    NgxSpinnerModule,
    LightgalleryModule,
    NgxImageZoomModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    BsDatepickerConfig,
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class SharedModule {}

