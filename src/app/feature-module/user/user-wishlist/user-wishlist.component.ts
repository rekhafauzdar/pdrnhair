import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent {
  public routes = routes;
  isClassAdded: boolean[] = [true, true, false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
 


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
      private matDialog: MatDialog, 
      private viewportScroller: ViewportScroller
    ) {
      
  this.loggedUserData = this.dataFactory.getCurrentUser();
        if (this.loggedUserData) {
        this.loggedUserName = this.loggedUserData.name;
        this.loggedUserEmail = this.loggedUserData.email;
        this.loggedMobile = this.loggedUserData.mobile;
        this.loggedUserType = this.loggedUserData.userType;
        this.loggedUserId = this.loggedUserData.userProfileId;
  
        }
      this.getWishListData(this.loggedUserId);
     
    }
  
  
productProfile(productId: any) {
  this.router.navigate(
    [this.routes.listingDetails],
    {
      queryParams: {
        id: productId.productId,   
        // name: product.productName
      }
    }
  );
}

  
  
  
wishlistData:any;
getWishListData(id:any){
 this.commonService.getWishListData(this.loggedUserId).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.wishlistData = res.data.items;
          // this.cartItems = res.data.items;
          console.log(this.wishlistData);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }


  removeFromTheWishList(productId: any){
        if(this.loggedUserId){
        const payload = {
          productId: productId,
          userId: this.loggedUserId,
        }
    
        this.commonService.removeFromWishlist(payload).subscribe({
          next: (res: any) => {
            if (res.status === 'true') {
             
              // ✅ cart count update service me push 
            this.commonService.updateWishlistCount(res.data.totalQuantity);
    
              Swal.fire({
              title: 'Success',
              text: `Item Removed From Wishlist`,
              icon: 'success',
              confirmButtonColor: '#0E82FD',
            }).then((result) => {
              if (result.isConfirmed) {
               
              }
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



   addToCart(productId: number) {
        if(this.loggedUserId){
        const payload = {
          productId: productId,
          userId: this.loggedUserId,
        }
    
        this.commonService.addToCart(payload).subscribe({
          next: (res: any) => {
            if (res.status === 'true') {
             
              // ✅ cart count update service me push 
            this.commonService.updateCartCount(res.data.totalQuantity);
    
              Swal.fire({
              title: 'Success',
              text: `Item added  to Cart`,
              icon: 'success',
              confirmButtonColor: '#0E82FD',
            }).then((result) => {
              if (result.isConfirmed) {
               
              }
            });
    
            } else {
    
            }
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else{
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
