import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import {
  interestedCars,
  listingDetails,
  thumbnails,
} from 'src/app/shared/services/model/model';
import { DatePipe } from '@angular/common';
import { Lightbox } from 'ngx-lightbox';
import { WriteReviewComponent } from '../../reviews/write-review/write-review.component';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { ActivatedRoute, Router } from '@angular/router';
interface data {
  value: string ;
}
interface gallery {
  src: string
}
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss'],
})
export class ListingDetailsComponent {
  public routes = routes;
  public gallery: Array<gallery> = [];
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  public selectedValue1 !: string;
  public selectedValue2 !: string;
  selectedList1: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];
  selectedList2: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];


   loggedUserData: any;
    loggedUserName: any;
    loggedMobile: any;
    loggedUserId: string = '';
    loggedUserEmail: any = '';
    loggedUserType: string = '';
     currentLoggedUserId: any;


  constructor(private data: DataService,
    private commonService:CommonService,
    private dataFactory:DataFactoryService,
    private route: ActivatedRoute,
      private router: Router,
     private datePipe: DatePipe,private _lightbox: Lightbox,private matDialog: MatDialog) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;
    this.interestedCars = this.data.interestedCars;
    for (let i = 1; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery-thumb-0' + i + '.jpg';
      this.gallery.push({ src: src });
    }
   

    

    this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
        this.loggedUserName = this.loggedUserData.name;
        this.loggedUserEmail = this.loggedUserData.email;
        this.loggedMobile = this.loggedUserData.mobile;
        this.loggedUserType = this.loggedUserData.userType;
        this.loggedUserId = this.loggedUserData.userProfileId;
        this.currentLoggedUserId=   this.loggedUserId ;
        
    }


  }





  trackByProductId(index: number, item: any): string {
    return item.id;
  }

productData:any;
productId: any;
productName:any;
ngOnInit() {
  //this.productData = this.commonService.getUserProductData();

  this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.productName = params['productName'];
      this.getAllProductDataByID(this.productId);
       window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // case 2: agar pura product bheja hai
    // this.route.queryParams.subscribe(params => {
    //   if (params['product']) {
    //     this.product = JSON.parse(params['product']);
    //     console.log(this.product);
    //   }
    // });
  
 
   this.getReviewById(this.productId);
   this.searhProductData();
}

getAllProductDataByID(productId:any){
    // Pehle page top par scroll karwao
  window.scrollTo({ top: 0, behavior: 'smooth' });
  this.commonService.getAllActiveProductById(productId).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {
        this.productData = res.data;
      }
    },
    error: (err: any) => {
      console.error('Error while fetching similar product data:', err);
    }
  });
}

reviewsData:any;
  getReviewById(productId:any){
     this.commonService.getReviewById(productId).subscribe({
          next: (res: any) => {
            if(res.status==='true'){
                       this.reviewsData = res.data;
              }
          },
          error: (err: any) => {
            //alert('Something went wrong while submitting');
            console.error(err);
          }
        });
  }


similarProductData: any;

searhProductData(
  productName: string = '',
  brandName: string = '',
  category: string = '',
  subCategory: string = '',
  superSubCategory: string = '',
  productType: string = '',
  concern: string = ''
) {
  const payload = {
    productName:  '',
    brandName: '',
    category: '',
    subCategory:  '',
    superSubCategory: superSubCategory || this.productData?.superSubCategory || '',
    productType: '',
    concern: ''
  };

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value as string);
    }
  });

   

  this.commonService.searhProductData(formData).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {
        this.similarProductData = res.data;
      }
    },
    error: (err: any) => {
      console.error('Error while fetching similar product data:', err);
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


 writereview(): void {    
  const dialogRef = this.matDialog.open(WriteReviewComponent, {
    data: { productId: this.productData?.id }   
  });

  dialogRef.afterClosed().subscribe((res: string) => {
    if (res) {
      console.log("Review Submitted:", res);
    }
       this.getReviewById(this.productData.id);
  });   
}

 

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:5
      }
    }
  };
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
     
  
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }






  



    addToCart() {
       if(this.currentLoggedUserId){
      const payload = {
        productId: this.productData.id,
        userId: this.currentLoggedUserId,
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




    addIntrestedItemToCart(id:any) {
       if(this.currentLoggedUserId){
      const payload = {
        productId: id,
        userId: this.currentLoggedUserId,
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






// proceedToNext(): void { 
//   if (!this.user) {
//     Swal.fire({
//       title: 'Login Required',
//       text: 'You need to log in to proceed to checkout.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Log In',
//       cancelButtonText: 'Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const url = this.router.url;
//         const userType = 'U'; 
//         this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: url, userType: userType } });        
//       }
//     });
//   } else {   
   
//     this.router.navigate(['/patient-details']);
//   }
// }


 isClassAdded: { [key: number]: boolean } = {}; // object jisme har product id ka state rahega

toggleClass(productId: number) {
  this.isClassAdded[productId] = !this.isClassAdded[productId];
}


  addToWishlist(productId: number) {
    if(this.currentLoggedUserId){
  const payload = {
    productId: productId,
    userId: this.currentLoggedUserId,
  };

  this.commonService.addToWishlist(payload).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {

        Swal.fire({
          title: 'Success',
          text: 'Item added to Wishlist',
          icon: 'success',
          confirmButtonColor: '#0E82FD',
        });
        
        // service ke through update
        this.commonService.updateWishlistCount(res.data.wishlistCount);

        
      }
    },
    error: (err) => console.error(err)
  });
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
