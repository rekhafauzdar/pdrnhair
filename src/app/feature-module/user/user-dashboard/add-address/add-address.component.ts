import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css',

})
export class AddAddressComponent {


 addForm: FormGroup;
 loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';
  userProfileId: any;



  constructor(
     private fb: FormBuilder,
  private userService: UserService,
      private router: Router,
      private commonService: CommonService,
      private dataFactoryService: DataFactoryService,
      private dialogRef: MatDialogRef<AddAddressComponent>,
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



 this.addForm = this.fb.group({
      country: ['India', Validators.required],
      contactPerson: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      houseNo: [''],
      town: [''],
      state: [''],
      city: [''],
      defaultAddress: [true]
    });




    }

  close(): void {
    this.dialogRef.close();
  }

useraddressData:any;
  // getAllAddress(){
  //    const payload = {
  //     userProfileId: this.loggedUserId,
  //   }
  //   this.commonService.getAllAddress(payload).subscribe((response: any) => {
  //     if (response.status == 'true') {
  //       this.useraddressData = response.data;
  //       console.log(this.useraddressData);
  //     } else {
  //       console.log("No Data Present");
  //     }
  //   });
  // }




 addAddress() {
    if (this.addForm.valid) {
       const formData = new FormData();
       formData.append('city', this.addForm.get('city')?.value ?? '');
       formData.append('state', this.addForm.get('state')?.value ?? '');
       formData.append('pincode', this.addForm.get('pincode')?.value ?? '');
       formData.append('address', this.addForm.get('address')?.value ?? '');
       formData.append('town', this.addForm.get('town')?.value ?? '');
       formData.append('houseNo', this.addForm.get('houseNo')?.value ?? '');
       formData.append('contactPerson', this.addForm.get('contactPerson')?.value ?? '');
       formData.append('mobileNo', this.addForm.get('mobileNo')?.value ?? '');
       formData.append('userProfileId',  this.userProfileId.toString());


          this.userService.saveAddress(formData).subscribe({
            next: (res: any) => {
              if (res.status === 'true') {
                 Swal.fire({
                title: 'Success',
                text: 'Address Added Successfully!',
                icon: 'success',
                confirmButtonColor: '#0E82FD',
              });
              this.dialogRef.close();
              //this.getAllAddress();
              this.router.navigate(['/user-dashboard']);
              }
            },
            error: (err: any) => {
              // Swal.fire({
              //   title: 'Error',
              //   text: 'Failed to add address. Please try again.',
              //   icon: 'error',
              //   confirmButtonColor: '#0E82FD',
              // });
              console.error('Error adding address:', err);

this.close();


            }
          });
    }
  }



}

