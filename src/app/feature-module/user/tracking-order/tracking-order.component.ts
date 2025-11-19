import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrackTimelineComponent } from './track-timeline/track-timeline.component';

@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrl: './tracking-order.component.css'
})
export class TrackingOrderComponent {
  constructor( private matDialog: MatDialog ) {}
  
 getCartData(){

  }
     openModal(): void {    
      const dialogResult = this.matDialog.open(TrackTimelineComponent);
        dialogResult.afterClosed().subscribe((res: string) => {
          this.getCartData();
        });   
      }
}
