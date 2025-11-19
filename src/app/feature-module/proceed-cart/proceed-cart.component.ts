import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { ViewportScroller } from '@angular/common';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import Swal from 'sweetalert2';
declare var Razorpay: any;

@Component({
  selector: 'app-proceed-cart',
  templateUrl: './proceed-cart.component.html',
  styleUrl: './proceed-cart.component.css'
})
export class ProceedCartComponent {
    public routes = routes;


addressId:string='1';


loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';

  constructor(
    private router: Router,
   
    private commonService: CommonService,
    private dataFactory:DataFactoryService,
    private matDialog: MatDialog, private viewportScroller: ViewportScroller
  ) {
    
this.loggedUserData = this.dataFactory.getCurrentUser();
      if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;

      }
    this.getCartData();
    this.getAllAddress()
  }


  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }



    addNewAddress(): void {    
      const dialogResult = this.matDialog.open(GuestPageComponent);
        dialogResult.afterClosed().subscribe((res: string) => {
          this.getCartData();
          this.getAllAddress();
        });   
      }



        cartData:any=[];
   cartItems:any=[];
getCartData(){
    this.commonService.viewCart(this.loggedUserId).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.cartData = res.data;
          this.cartItems = res.data.items;
          console.log(this.cartData);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });

  }



    useraddressData:any;

getAllAddress() {
  const userProfileId = this.loggedUserId; 

  this.commonService.getAllAddress(userProfileId).subscribe((response: any) => {
    if (response.status === 'true') {
      this.useraddressData = response.data;
      console.log("User Address Data:", this.useraddressData);
    } else {
      console.log("No Data Present");
    }
  }, (error) => {
    console.error("Error fetching addresses:", error);
  });
}









  placeOrder(addressId:any){
    const RazorpayOptions = {
      description: 'Sample Razorpay',
      currency: "INR",
      amount: this.cartData.totalAmount * 100,
      name: `${this.loggedUserName}`,
      key: 'rzp_live_H6nbAhRhfYBDHK',
      image: 'assets/img/logo.png',

      prefill: {
        name: `${this.loggedUserName}`,
        contact: this.loggedMobile,
        email: this.loggedUserEmail,
      },

      theme: {
        color: '#5463f0'
      },

      handler: (response: any) => {  // Payment Success Callback
        const payment = {
         
          userId: this.loggedUserId,
          addressId: addressId,
          totalAmount:this.cartData.totalAmount,
          paymentMethod:response.paymentMethod,
          paymentId: response.razorpay_payment_id,
          paymentStatus: 'SUCCESS'
        };

        this.commonService.placeOrder(payment).subscribe({
          next: (res: any) => {
            if (res.status === 'true') {
              const allData={
                ...payment,
                addressId: addressId,
                totalAmount:this.cartData.totalAmount,
                userName:`${this.loggedUserName}`,
                mobile:this.loggedMobile,
                email:this.loggedUserEmail,
               
                   paymentId: response.razorpay_payment_id,
          paymentStatus: 'SUCCESS'
              }
              this.router.navigate(['/home'], { state: allData });
            } else {
               Swal.fire({
                            title: `${res.message}`,
                            text: '',
                            icon: 'error',
                            confirmButtonColor: '#0E82FD',
                          });
              console.error("Order failed: No Product Data Present");
            }
          },
          error: (err:any) => console.error("API Error:", err)
        });
      },

      modal: {
        ondismiss: () => { // Payment Failure or Dismissed Callback
          //console.log('Payment Cancelled or Failed');

          const payment = {
           userId: this.loggedUserId,
          addressId: addressId,
        
          totalAmount:this.cartData.totalAmount,
          

           paymentMethod:"online",
          paymentId: null,
           
            paymentStatus: 'FAILURE'
          };

          this.commonService.placeOrder(payment).subscribe({
            next: (res: any) => {
              if (res.status === 'true') {
                const allData={
                  ...payment,
                   addressId: addressId,
                totalAmount:this.cartData.totalAmount,
                userName:`${this.loggedUserName}`,
                mobile:this.loggedMobile,
                email:this.loggedUserEmail,
               
                  
                   paymentId: null,
            paymentStatus: 'FAILURE'
                }
                this.router.navigate(['/home'], { state: allData });
              } else {
                console.error("Order failed: No Product Data Present");
                 Swal.fire({
                            title: `${res.message}`,
                            text: '',
                            icon: 'error',
                            confirmButtonColor: '#0E82FD',
                          });
              }
            },
            error: (err) => console.error("API Error:", err)
          });
        }
      }
    };

    const rzp: any = new Razorpay(RazorpayOptions);
    rzp.open();
  }







      paymentMethod:any;
      paymentId:any;
paymentStatus:any;

//     placeOrder(addressId:number){
// const payload={
//   userId: this.loggedUserId,
//   addressId:addressId,
//   paymentMethod:this.paymentMethod,
//   paymentId:this.paymentId,
//   paymentStatus:this.paymentStatus,

// }
//  this.commonService.placeOrder(payload).subscribe({
//       next: (res: any) => {
//         if (res.status === 'true') {
         
         
//         } else {

//         }
//       },
//       error: (err: any) => {
//         console.error(err);
//       }
//     });
// }





removeItem(productId:number){
const payload={
  userId: this.loggedUserId,
  productId:productId
}
 this.commonService.removeCart(payload).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
         this.getCartData();
         Swal.fire({
                            title: `One Item is Deleted`,
                            text: '',
                            icon: 'error',
                            confirmButtonColor: '#0E82FD',
                          });
         
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
}

}
