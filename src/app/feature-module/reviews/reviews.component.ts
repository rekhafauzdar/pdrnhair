import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Lightbox } from 'ngx-lightbox';
import { WriteReviewComponent } from './write-review/write-review.component';
interface data {
  value: string ;
}
interface gallery {
  src: string
}
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  public gallery: Array<gallery> = [];
  constructor (private viewportScroller: ViewportScroller,private _lightbox: Lightbox,
                     private matDialog: MatDialog ) {

  }
 ngAfterViewInit(): void {
  setTimeout(() => {
    window.scrollTo(0, 0); // 👈 fallback option
  }, 0);
}
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
      writereview(): void {    
        const dialogResult = this.matDialog.open(WriteReviewComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
          });   
        }
   close(): void {
    this._lightbox.close();
  }
}
