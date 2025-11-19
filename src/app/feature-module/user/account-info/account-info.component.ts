import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent {
    constructor( private matDialog: MatDialog ) {}
    
   getCartData(){
  
    }
 profileImage: string = 'https://ui-avatars.com/api/?name=Abhi+Pandey&background=random&size=200';

  // Image Change Function
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        this.profileImage = e.target?.result as string;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
       openModal(): void {    
        const dialogResult = this.matDialog.open(EditProfileComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getCartData();
          });   
        }
}
