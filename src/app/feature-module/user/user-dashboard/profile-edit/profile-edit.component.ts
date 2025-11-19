import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { UserService } from '../../user.service';
import { FormGroup, FormsModule } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css',

})
export class ProfileEditComponent {

    loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';

//profileForm: FormGroup;

  constructor(
      private router: Router,
      private commonService: CommonService,
      private userService: UserService,
      private dataFactoryService: DataFactoryService,
      private dialogRef: MatDialogRef<ProfileEditComponent>,
    ) {
this.loggedUserData = this.dataFactoryService.getCurrentUser();
if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;
      this.userProfileId = this.loggedUserId;
}


this.getUserData();

    }

  close(): void {
    this.dialogRef.close();
  }

onImageSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      const imgElement = document.getElementById('profileImage') as HTMLImageElement;
      if (imgElement) {
        imgElement.src = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}

firstName: string = '';
  lastName: string = '';
  age: number = 20;
  mobile: string = '';
  email: string = '';

  aadharNumber: string = '';
 aadharPdfId: string = '';

  dlNumber: string = '';
   dlPdfId: string = '';

  panNumber: string = '';
  panPdfId: string = '';

  acceptTandC: boolean = true;


  pincode: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  country: string = 'India';

  stateList: any[] = [];
  cityList: any;

  dob: Date = new Date();
  userData: any;
  userProfileId: any;
  gender:any='female';
  userName:any;

 saveUserProfile() {
    const payload = {
     userImageId: '',
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.commonService.changeInputDateFormat(this.dob),
      age: this.age,
      phoneNumber: this.mobile,
      gender:this.gender,
userName:this.userName,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      aadharNumber: this.aadharNumber,
       aadharPdfId: this.aadharPdfId,

      dlNumber: this.dlNumber,
      dlPdfId: this.dlPdfId,
     
      panNumber: this.panNumber,
      panPdfId: this.panPdfId,

      acceptTandC: this.acceptTandC === true ? 'Yes' : 'No'
    }

    this.userService.updateUserProfile(payload, this.userProfileId).subscribe((response: any) => {
      if (response.status == 'true') {
        this.userData = response.data;
        this.userProfileId = this.userData.userProfileId;
        Swal.fire({
                        title: 'Success',
                        text: ' Profile Updated Successfully!',
                        icon: 'success',
                        confirmButtonColor: '#0E82FD',
                      });
                       this.dialogRef.close();

      } else {
        console.log(response);
         this.dialogRef.close();
      }

    });

  }




    userProfileData:any;
   getUserData(){
 const payload = {
      userProfileId: this.loggedUserId,
    }
    this.userService.getUserProfileById(payload).subscribe((response: any) => {
      if (response.status == 'true') {
        this.userProfileData = response.data;
        console.log(this.userProfileData);
      } else {
        console.log("No Data Present");
      }
    });
    }

}
