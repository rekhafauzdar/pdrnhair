import { Component } from '@angular/core';

import { DatePipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
interface data {
  value: string;
}
@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrl: './brand-products.component.css'
})
export class BrandProductsComponent {
 public selectedValue1!: string;
 
  public selectedValue3!: string;
  public listingGrid: listingGrid[] = [];


     loggedUserData: any;
    loggedUserName: any;
    loggedMobile: any;
    loggedUserId: string = '';
    loggedUserEmail: any = '';
    loggedUserType: string = '';


  constructor(private data: DataService,private datePipe: DatePipe,
    private commonService:CommonService,
    private ActivatedRoute: ActivatedRoute,
    private dataFactory: DataFactoryService,
    private router: Router,
  ) {
    this.listingGrid = this.data.listingGrid;
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

  public routes = routes;

  slidevalue = 55;

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];

  TopBrandcategry: OwlOptions = {
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:3
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:7
      }
    },
  };
 selectedList3: data[] = [
    { value: 'Popular' },
    { value: 'Toyota Camry SE 350' },
    { value: 'Audi A3 2019 new' },
    { value: 'Ferrari 458 MM Speciale' },
    { value: 'Chevrolet Camaro' },
    { value: 'Acura Sport Version' },
  ];
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

 
  
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
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();






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


// productProfile(product: any) {
//   this.router.navigate(
//     [this.routes.listingDetails],
//     {
//       queryParams: {
//         product: JSON.stringify(product)
//       }
//     }
//   );
// }






ngOnInit() {
  this.ActivatedRoute.queryParams.subscribe(params => {
    const filters = {
      productName: params['productName'] || '',
      brandName: params['brandName'] || '',
      category: params['category'] || '',
      subCategory: params['subCategory'] || '',
      superSubCategory: params['superSubCategory'] || '',
      productType: params['productType'] || '',
      concern: params['concern'] || ''
    };

    // ✅ API call here with filters
    this.getFilteredProducts(filters);
  });
}



getFilteredProducts(filters: any) {
  const formData = new FormData();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      formData.append(key, String(value)); // ✅ ensure string
    }
  });

  this.commonService.searhProductData(formData).subscribe({
    next: (res: any) => {
       this.originalProducts = res.data;
    this.products = [...this.originalProducts];
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}


 currentLoggedUserId: any;
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
  



  products: any[] = [];
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
      this.products.sort((a, b) => Number(a.mrp) - Number(b.mrp));
      break;
    case 'Price: High to Low':
      this.products.sort((a, b) => Number(b.mrp) - Number(a.mrp));
      break;
    case 'Name: A to Z':
      this.products.sort((a, b) => a.productName.localeCompare(b.productName));
      break;
    case 'Name: Z to A':
      this.products.sort((a, b) => b.productName.localeCompare(a.productName));
      break;
    case 'Newest First':
      this.products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'Oldest First':
      this.products.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      break;
  }
}



originalProducts: any[] = []; // all products
getAllProductData: any[] = []; // filtered products


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
  this.products = filtered;
}



}
