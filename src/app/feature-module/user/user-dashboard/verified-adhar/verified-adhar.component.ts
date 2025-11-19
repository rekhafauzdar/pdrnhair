
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-verified-adhar',
  standalone: true,
  imports: [],
  templateUrl: './verified-adhar.component.html',
  styleUrl: './verified-adhar.component.css'
})
export class VerifiedAdharComponent {
  constructor(
      private dialogRef: MatDialogRef<VerifiedAdharComponent>,
    ) {}
  close(): void {
    this.dialogRef.close();
  }
}
