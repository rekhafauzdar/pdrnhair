import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { WriteReviewComponent } from './write-review/write-review.component';


@NgModule({
  declarations: [
    WriteReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule
  ]
})
export class ReviewsModule { }
