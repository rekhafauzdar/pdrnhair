import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
import { ViewportScroller } from '@angular/common';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
interface data {
  value: string;
}
@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css'],
})
export class ListingGridComponent {



// close product tabs 
// open sidebar ts
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
// close sidebar ts



  public selectedValue1!: string;
  
  public selectedValue3!: string;
  public listingGrid: listingGrid[] = [];
  currentLoggedUserId: any;


 loggedUserData: any;
    loggedUserName: any;
    loggedMobile: any;
    loggedUserId: string = '';
    loggedUserEmail: any = '';
    loggedUserType: string = '';

  constructor(
    private data: DataService, private datePipe: DatePipe,
    private viewportScroller: ViewportScroller,
    private commonService: CommonService,
    private dataFactory: DataFactoryService,
    private router: Router,
    private spinner: NgxSpinnerService
    
  ) {
    this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
        this.loggedUserName = this.loggedUserData.name;
        this.loggedUserEmail = this.loggedUserData.email;
        this.loggedMobile = this.loggedUserData.mobile;
        this.loggedUserType = this.loggedUserData.userType;
        this.loggedUserId = this.loggedUserData.userProfileId;
        this.currentLoggedUserId=   this.loggedUserId ;
        
    }
    this.listingGrid = this.data.listingGrid;
    this.getAllVerifiedProductData();
     this.getAllActiveProductData();
   
  }


  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


   showSpinner() {
          this.spinner.show();
          // Simulate data loading
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        }


  public routes = routes;
slidevalue = 55;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  
 isClassAdded: { [key: number]: boolean } = {}; // object jisme har product id ka state rahega

toggleClass(productId: number) {
  this.isClassAdded[productId] = !this.isClassAdded[productId];
}





// toggleClass(productId: number) {
//   this.isClassAdded[productId] = !this.isClassAdded[productId];

//   if (this.isClassAdded[productId]) {
//     this.addToWishlist(productId);  // wishlist me add
//   } else {
//     this.removeFromWishlist(productId);  // wishlist se remove (agar API support karti hai)
//   }
// }

// removeFromWishlist(productId:any){

// }


  getAllverifiedData: any = [];
getAllVerifiedProductData() {
    this.commonService.getAllProductVerifiedData().subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.getAllverifiedData = res.data;
          console.log(this.getAllverifiedData);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }



  trackByProductId(index: number, item: any): string {
    return item.id;
  }


  originalProducts: any[] = [];
getAllProductData: any[] = [];

activeTab = 'all';

tabs = [
  { id: 'all', label: 'All' },
  { id: 'Derma-PN-Eye', label: 'Derma PN Eye' },
  { id: 'Derma-1', label: 'Derma PN 1' },
  { id: 'Derma-2', label: 'Derma PN 2' },
  { id: 'Derma-3', label: 'Derma PN 3' },
];



getAllActiveProductData() {
  this.commonService.getAllActiveProductData().subscribe({
    next: (res: any) => {
      if (res.status === 'true' && Array.isArray(res.data)) {

        this.originalProducts = res.data.filter(
          (item: any) => item.countryOrigin?.toLowerCase() === 'pdrnhair'.toLowerCase()
        );

        this.getAllProductData = [...this.originalProducts];

      } else {
        console.warn('No active products found');
      }
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}




get filteredProducts() {
  if (this.activeTab === 'all') {
    return this.getAllProductData;
  } else {
    // Match category ignoring case (e.g., "Skin" === "skin")
    return this.getAllProductData.filter(
      (p) => p.superSubCategory?.toLowerCase() === this.activeTab.toLowerCase()
    );
  }
}

// 💡 Change tab
selectTab(tabId: string) {
  this.activeTab = tabId;
}


// productProfile(product: any) {
//   this.commonService.setUserProductData(product);
//   this.router.navigate([this.routes.listingDetails]);  // navigate bhi karo
// }


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
}


  // addToCart(productId: number) {
  //   const payload = {
  //     productId: productId,
  //     userId: this.currentLoggedUserId,
  //   }

  //   this.commonService.addToCart(payload).subscribe({
  //     next: (res: any) => {
  //       if (res.status === 'true') {
         
  //         // ✅ cart count update service me push 
  //       this.commonService.updateCartCount(res.data.totalQuantity);

  //         Swal.fire({
  //         title: 'Success',
  //         text: `Item added  to Cart`,
  //         icon: 'success',
  //         confirmButtonColor: '#0E82FD',
  //       }).then((result) => {
  //         if (result.isConfirmed) {
           
  //         }
  //       });

  //       } else {

  //       }
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //     }
  //   });

  // }

  
  
    addToCart(productId: number) {
      if(this.currentLoggedUserId){
      const payload = {
        productId: productId,
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




selectedValue2: string = '';

selectedList2 = [
  { value: 'Price: Low to High' },
  { value: 'Price: High to Low' },
  { value: 'Name: A to Z' },
  { value: 'Name: Z to A' },
  { value: 'Newest First' },
  { value: 'Oldest First' }
];


onSortChange(sortType: string) {
  switch (sortType) {
    case 'Price: Low to High':
      this.getAllProductData.sort((a:any, b:any) => Number(a.mrp) - Number(b.mrp));
      break;
    case 'Price: High to Low':
      this.getAllProductData.sort((a:any, b:any) => Number(b.mrp) - Number(a.mrp));
      break;
    case 'Name: A to Z':
      this.getAllProductData.sort((a:any, b:any) => a.productName.localeCompare(b.productName));
      break;
    case 'Name: Z to A':
      this.getAllProductData.sort((a:any, b:any) => b.productName.localeCompare(a.productName));
      break;
    case 'Newest First':
      this.getAllProductData.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'Oldest First':
      this.getAllProductData.sort((a:any, b:any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      break;
  }
}




minPrice: number = 500;
maxPrice: number = 10000;
selectedMax: number = 10000;

onPriceChange(event: any) {
  this.selectedMax = event.target.value;
  this.applyFilters();
}



selectedCategories: string[] = [];
onCategoryChange(event: any, category: string) {
  if (event.target.checked) {
    this.selectedCategories.push(category);
  } else {
    this.selectedCategories = this.selectedCategories.filter(c => c !== category);
  }
  this.applyFilters();
}

selectedConcerns: string[] = [];
onConcernChange(event: any, bodyConcern: string) {
  if (event.target.checked) {
    this.selectedConcerns.push(bodyConcern);
  } else {
    this.selectedConcerns = this.selectedConcerns.filter(c => c !== bodyConcern);
  }
  this.applyFilters();
}

selectedSkintype: string[] = [];
onSkintypeChange(event: any, skinType: string) {
  if (event.target.checked) {
    this.selectedSkintype.push(skinType);
  } else {
    this.selectedSkintype = this.selectedSkintype.filter(c => c !== skinType);
  }
  this.applyFilters();
}

selectedIngredient: string[] = [];
onIngredientChange(event: any, ingredient: string) {
  if (event.target.checked) {
    this.selectedIngredient.push(ingredient);
  } else {
    this.selectedIngredient = this.selectedIngredient.filter(c => c !== ingredient);
  }
  this.applyFilters();
}

selectedFormulation: string[] = [];
onFormulationChange(event: any, formulation: string) {
  if (event.target.checked) {
    this.selectedFormulation.push(formulation);
  } else {
    this.selectedFormulation = this.selectedFormulation.filter(c => c !== formulation);
  }
  this.applyFilters();
}


selectedPreference: string[] = [];
onPreferenceChange(event: any, preference: string) {
  if (event.target.checked) {
    this.selectedPreference.push(preference);
  } else {
    this.selectedPreference = this.selectedPreference.filter(c => c !== preference);
  }
  this.applyFilters();
}

applyFilters() {
  let filtered = [...this.originalProducts];

  // Price filter
  filtered = filtered.filter(p => Number(p.sellingPrice) <= this.selectedMax);

    // Category filter
  if (this.selectedCategories.length > 0) {
    filtered = filtered.filter(p => this.selectedCategories.includes(p.productType));
  }

   // Concern filter
  if (this.selectedConcerns.length > 0) {
    filtered = filtered.filter(p => this.selectedConcerns.includes(p.concern));
  }

  // Skin type  filter
  if (this.selectedSkintype.length > 0) {
    filtered = filtered.filter(p => this.selectedSkintype.includes(p.skinType));
  }

   // Ingredient filter
  if (this.selectedIngredient.length > 0) {
    filtered = filtered.filter(p => this.selectedIngredient.includes(p.keyIngredients));
  }

   // Formulation  filter
  if (this.selectedFormulation.length > 0) {
    filtered = filtered.filter(p => this.selectedFormulation.includes(p.productType));
  }
    // Preference  filter
  if (this.selectedPreference.length > 0) {
    filtered = filtered.filter(p => this.selectedPreference.includes(p.keyIngredients));
  }

  // ✅ Default Condition — If no result, show all products again
  if (filtered.length === 0) {
    filtered = [...this.originalProducts];
  }

  this.getAllProductData = filtered;
}




}
