import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routes } from 'src/app/shared/routes/routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css',


})
export class ViewCartComponent {

  public routes = routes

  loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ViewCartComponent>,
    private commonService: CommonService,
    private dataFactory: DataFactoryService
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
  }

  productProfile(productId: any) {
    this.router.navigate(
      [this.routes.listingDetails],
      {
        queryParams: {
          id: productId,
          // name: product.productName
        }
      }
    );
    this.close();
  }


  trackByProductId(index: number, item: any): string {
    return item.productId;
  }

  cartData: any = [];
  cartItems: any = [];

  getCartData() {
    this.commonService.viewCart(this.loggedUserId).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.cartData = res.data;
          this.cartItems = res.data.items;

        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });

  }

  removeItem(productId: number) {
    const payload = {
      userId: this.loggedUserId,
      productId: productId
    }
    this.commonService.removeCart(payload).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.getCartData();
          this.close();
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


  close(): void {
    this.dialogRef.close();
  }

  cartProduct: any;
  proceedCart() {
    this.dialogRef.close();
    this.router.navigate(['proceed-cart'], { state: this.cartProduct });
  }


  wishlistProduct: any;
  wishlist() {
    this.dialogRef.close();
    this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });
  }

}
