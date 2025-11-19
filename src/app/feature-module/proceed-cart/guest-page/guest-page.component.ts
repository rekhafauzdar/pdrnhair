import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import Swal from 'sweetalert2';
import { UserService } from '../../user/user.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrl: './guest-page.component.css'
})
export class GuestPageComponent {

   addForm: FormGroup;
 loggedUserData: any=[];
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';



  constructor(
     private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<GuestPageComponent>,
    private commonService: CommonService,
    private userService:UserService,
    private dataFactoryService:DataFactoryService
  ) {


     this.loggedUserData = this.dataFactoryService.getCurrentUser();
if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;
      this.currentUserId = this.loggedUserId;
    }

    this.addForm = this.fb.group({
      country: ['India'],
      contactPerson: [''],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      houseNo: [''],
      town: [''],
      state: [''],
      city: [''],
      email:[''],
      defaultAddress: [true]
    });

}



  close(): void {
    this.dialogRef.close();
  }



  cartProduct: any;
  proceedCart() {
    this.dialogRef.close();
    this.router.navigate(['proceed-cart'], { state: this.cartProduct });
  }


  // wishlistProduct:any;
  // wishlist(){
  //   this.dialogRef.close();
  //   this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });   
  // }







  // addNewAddress() {
  //   const formData = new FormData();
  //   formData.append('pincode', this.addressForm.get('pincode')?.value ?? '');
  //   formData.append('houseNo', this.addressForm.get('houseNo')?.value ?? '');
  //   formData.append('city', this.addressForm.get('city')?.value ?? '');
  //   formData.append('state', this.addressForm.get('state')?.value ?? '');
  //    formData.append('town', this.addressForm.get('town')?.value ?? '');
  //   formData.append('address', this.addressForm.get('address')?.value ?? '');
  //       formData.append('contactPerson', this.addressForm.get('contactPerson')?.value ?? '');
  //   formData.append('mobileNo', this.addressForm.get('mobileNo')?.value ?? '');
  //     formData.append('userProfileId', this.currentUserId);

  //   this.commonService.addAddress(formData).subscribe({
  //     next: (res: any) => {
  //       if (res.status === 'true') {
  //         Swal.fire({
  //           title: `${res.message}`,
  //           text: '',
  //           icon: 'error',
  //           confirmButtonColor: '#0E82FD',
  //         });

  //       } else {
  //         Swal.fire({
  //           title: `${res.message}`,
  //           text: '',
  //           icon: 'error',
  //           confirmButtonColor: '#0E82FD',
  //         });
  //       }
  //     },
  //     error: (err: any) => {
  //       Swal.fire({
  //         title: `${err.message}`,
  //         text: '',
  //         icon: 'error',
  //         confirmButtonColor: '#0E82FD',
  //       });
  //       console.error(err);
  //     }
  //   });
  // }


  paymentMethod: any='online';
  paymentId: any=7678;
  paymentStatus: any='success';
  currentUserId: any;
  addressId: number=1;

  placeOrder() {
    const payload = {
      userId: this.currentUserId,
      addressId: this.addressId,
      paymentMethod: this.paymentMethod,
      paymentId: this.paymentId,
      paymentStatus: this.paymentStatus,

    }
    this.commonService.placeOrder(payload).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });

        } else {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });
        }
      },
      error: (err: any) => {
        Swal.fire({
          title: `${err.message}`,
          text: '',
          icon: 'error',
          confirmButtonColor: '#0E82FD',
        });
        console.error(err);
      }
    });
  }






 addAddress() {
if (this.loggedUserData) {
  
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
       formData.append('userProfileId',  this.currentUserId.toString());


          this.userService.saveAddress(formData).subscribe({
            next: (res: any) => {
              if (res.status === 'true') {
             
Swal.fire({
                title: 'success',
                text: 'Address add successfully!',
                icon: 'success',
                confirmButtonColor: '#0E82FD',
              });

              this.dialogRef.close();
             
              }
            },
            error: (err: any) => {
              Swal.fire({
                title: 'Error',
                text: 'Failed to add address. Please try again.',
                icon: 'error',
                confirmButtonColor: '#0E82FD',
              });
              console.error('Error adding address:', err);
              this.close();
            }
          });
    }else{
       Swal.fire({
         title: 'Fill the * fields',
        //  text: 'You need to log in to add to cart.',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Okay',
         cancelButtonText: 'Cancel'
       })
    }

  }else{
    Swal.fire({
         title: 'Login Required',
         text: 'You need to log in to add to cart.',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Log In',
         cancelButtonText: 'Cancel'
       }).then((result) => {
         if (result.isConfirmed) {
           const url = this.router.url;
           this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: url } });        
         }
       });
  }
  }

}
