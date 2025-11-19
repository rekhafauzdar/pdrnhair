import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-timeline',
  templateUrl: './track-timeline.component.html',
  styleUrl: './track-timeline.component.css'
})
export class TrackTimelineComponent {

    constructor(
      private router: Router,
      private dialogRef: MatDialogRef<TrackTimelineComponent>,
    ) {
      
    }

  close(): void {
    this.dialogRef.close();
  }
}
