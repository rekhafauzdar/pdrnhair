import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { header } from 'src/app/shared/services/model/model';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewCartComponent } from '../../view-cart/view-cart.component';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
 templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  public routes = routes;
  currentUserId:any;


     loggedUserData: any;
    loggedUserName: any;
    loggedMobile: any;
    loggedUserId: string = '';
    loggedUserEmail: any = '';
    loggedUserType: string = '';


  cartCount: number = 0;
  wishlistCount: number = 0;

  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService,
    private router: Router,
    private matDialog: MatDialog,
    private dataFactory: DataFactoryService,
    private translate: TranslateService
  ) {


     const savedLang = localStorage.getItem('lang') || 'en';
  this.translate.setDefaultLang(savedLang);
  this.translate.use(savedLang);


     
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;

     this.common.cartCount$.subscribe(count => {
      this.cartCount = count;
    });


    this.common.wishlistCount$.subscribe(count => {
    this.wishlistCount = count;
  });
  }


  selectedLanguage: any = {
  code: 'en',
  label: 'English',
  flag: 'assets/img/flags/us.png'
};

changeLanguage(lang: string) {
  localStorage.setItem('lang', lang);
  
  if (lang === 'en') {
    this.selectedLanguage = { code: 'en', label: 'English', flag: 'assets/img/flags/us.png' };
  } else if (lang === 'cn') {
    this.selectedLanguage = { code: 'cn', label: 'Chinese', flag: 'assets/img/flags/cn.png' };
  } else if (lang === 'kr') {
    this.selectedLanguage = { code: 'kr', label: 'Korean', flag: 'assets/img/flags/flag-koria.png' };
  } else if (lang === 'jp') {
    this.selectedLanguage = { code: 'jp', label: 'Japanese', flag: 'assets/img/flags/jp.png' };
  }

  // Your existing language service code
  this.translate.use(lang);
}







  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }



  logout(){
    this.common.logout();
     this.router.navigate(['/home']); 
  }


  userLogin: boolean = false;
  

ngOnInit(): void {

this.common.userLogin$.subscribe((status) => {
    this.userLogin = status;

    if (status) {
 this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
        this.loggedUserName = this.loggedUserData.name;
        this.loggedUserEmail = this.loggedUserData.email;
        this.loggedMobile = this.loggedUserData.mobile;
        this.loggedUserType = this.loggedUserData.userType;
        this.loggedUserId = this.loggedUserData.userProfileId;
        this.currentUserId=   this.loggedUserId ;
        
    }

    } 
  });

    this.common.cartCount$.subscribe(count => {
      this.cartCount = count;
    });


    this.common.wishlistCount$.subscribe(count => {
    this.wishlistCount = count;
  });
  }




  onMenuClick(menu: any, mainMenu: any) {
  // brandName 
  if (mainMenu.tittle === 'Brands') {
    this.searhProductData('', menu.menuValue, '', '', '', '', '');
  }

  // category
  else if (mainMenu.tittle === 'Categories') {
    this.searhProductData('', '', '', '', menu.menuValue, '', '');
  }

  // "Luxe"
  else if (mainMenu.tittle === 'Luxe') {
    this.searhProductData('', '', '', '', menu.menuValue, '', '');
  }

  // Default: productType 
  else {
    this.searhProductData('', '', '', '', '', '', menu.menuValue);
  }
}




  // wishlistProduct:any;
  // wishlist(){
  //   this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });
  // }




activeCategory: string | null = null;
toggleCategory(category: string) {
    if (this.activeCategory === category) {
      this.activeCategory = null;  // agar same category click ki toh band ho jaye
    } else {
      this.activeCategory = category; // warna naya category open ho
    }
  }






searchterm: string = '';
searhProductData(
  productName: string = '',
  brandName: string = '',
  category: string = '',
  subCategory: string = '',
  superSubCategory: string = '',
  productType: string = '',
  concern: string = ''
) {
  //  direct search box use 
  if (this.searchterm) {
    // productName = this.searchterm;
    // brandName = this.searchterm;
    productType = this.searchterm;
    // category = this.searchterm;
    // subCategory = this.searchterm;
    // superSubCategory = this.searchterm;
    // concern = this.searchterm;
  }

  const payload = {
    productName,
    brandName,
    category,
    subCategory,
    superSubCategory,
    productType,
    concern
  };

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  this.common.searhProductData(formData).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {
        this.router.navigate([this.routes.brandsProducts], {
          queryParams: payload
        });
        this.activeCategory = null;
      }
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}





  viewCart(): void {
    const dialogResult = this.matDialog.open(ViewCartComponent);
      dialogResult.afterClosed().subscribe((res: string) => {
        //this.getCartData();
      });
    }






// ✅ getter jo brandSearchTerm ke basis pe filter karega
// get filteredBrands(): string[] {
//   if (!this.brandSearchTerm) {
//     return this.allBrands;
//   }
//   return this.allBrands.filter(b =>
//     b.toLowerCase().includes(this.brandSearchTerm.toLowerCase())
//   );
// }





brandSearchTerm: string = '';
allBrands: string[] = [
 'APLB', 'AXIS-Y', 'BAREN', 'BEAUTY OF JOSEON', 'BENTON', 'BIODANCE', 'CELIMAX',
'CLIO', 'COSRX', "D'ALBA PIEDMONT", 'DERMA-B', 'DR.BLUE', 'Dr.G', 'EDGEU',
'ELIZAVECCA', 'ESTILO', 'ETUDE', 'FABYOU', 'GLOSSYS', 'GOODAL', 'HEIMISH',
'HINCE', 'HOUSE OF HUR', 'ILLIYOON', 'INNISFREE', 'ISNTREE', 'JUMISO', 'LALACHUU',
'LANEIGE', 'MARY&MAY', 'MEDICELL BIO', 'MEDIPEEL', 'MISSHA', 'NUMBUZIN', 'OSÈQUE',
'PERIPERA', 'PETITFEE', 'PURE SKIN', 'PYUNKANG YUL', 'RATAPLAN', 'ROM&ND',
'ROUND LAB', 'SOME BY MI', 'THE FACE SHOP CLEAN BEAUTY', 'TIAM', 'TIRTIR',
'TOAS', 'TOCOBO', 'TOO COOL FOR SCHOOL', 'V21', 'WOL GOO'
];

activeLetter: string = '*';  // Default → sab brands

get filteredBrands(): string[] {
  let brands = this.allBrands;

  // 1) Search filter
  if (this.brandSearchTerm) {
    brands = brands.filter(b =>
      b.toLowerCase().includes(this.brandSearchTerm.toLowerCase())
    );
  }

  // 2) Letter filter
  if (this.activeLetter !== '*') {
    brands = brands.filter(b =>
      b.charAt(0).toUpperCase() === this.activeLetter
    );
  }

  return brands;
}

// ✅ Letter filter method
filterBrandsByLetter(letter: string) {
  this.activeLetter = letter;
}










 // new brand hover section

  activeTab = 'popular';

  tabs = [
    { id: 'popular', label: 'POPULAR' },
    { id: 'luxe', label: 'LUXE' },
    { id: 'bellaluna', label: 'ONLY AT BELLALUNA' },
    { id: 'launches', label: 'NEW LAUNCHES' }
  ];

  setTab(tabId: string) {
    this.activeTab = tabId;
  }
  // new brand hover section end








}
