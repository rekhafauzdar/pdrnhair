import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
   constructor(
      private router: Router,
      private dialogRef: MatDialogRef<EditProfileComponent>,
    ) {
      
    }

  close(): void {
    this.dialogRef.close();
  }
}
