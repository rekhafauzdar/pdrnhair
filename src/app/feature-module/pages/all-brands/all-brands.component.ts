import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrl: './all-brands.component.css'
})
export class AllBrandsComponent {

  public routes = routes

  constructor(
    private commonService: CommonService,
    private router: Router,
  ) {



  }


  brands = [
    // { name: 'add', logo: 'assets/img/brand/bellaluna.png' },
    { name: 'bio-ones', logo: 'assets/img/brand/bio-ones.png' },
    { name: 'dr.blue', logo: 'assets/img/brand/dr.-blue.png' },
    { name: 'estilo', logo: 'assets/img/brand/estilo.png' },
    { name: 'glossys', logo: 'assets/img/brand/glossys.png' },
    { name: 'Lalachuu', logo: 'assets/img/brand/lalachuu.png' },
    { name: 'medicell', logo: 'assets/img/brand/medicell-bio.png' },
    { name: 'oseque', logo: 'assets/img/brand/OSEQUE.png' },
    { name: 'toas', logo: 'assets/img/brand/TOAS.png' },
    { name: 'cosrx', logo: 'assets/img/brand/new-brands1.png' },
    { name: 'add', logo: 'assets/img/brand/new-brands2.png' },
    { name: 'numbuz:n', logo: 'assets/img/brand/new-brands3.png' },
    { name: 'tirtir', logo: 'assets/img/brand/new-brands4.jpg' },
    { name: 'peripera', logo: 'assets/img/brand/new-brands5.png' },
    { name: 'goodal', logo: 'assets/img/brand/new-brands6.png' },
    { name: 'axis-y', logo: 'assets/img/brand/new-brands7.png' },
    { name: 'isstree', logo: 'assets/img/brand/new-brands8.png' },
    { name: 'dalba', logo: 'assets/img/brand/new-brands9.png' },
    { name: 'biodance', logo: 'assets/img/brand/new-brands10.webp' },
    { name: 'missha', logo: 'assets/img/brand/new-brands11.png' },
    { name: 'clio', logo: 'assets/img/brand/new-brands12.png' },
    { name: 'etude', logo: 'assets/img/brand/new-brands13.png' },
    { name: 'innisfree', logo: 'assets/img/brand/new-brands14.png' },
    { name: 'laneige', logo: 'assets/img/brand/new-brands15.png' },
    { name: 'ram&nd', logo: 'assets/img/brand/new-brands16.png' },
    { name: 'faceshop', logo: 'assets/img/brand/new-brands17.png' },
    { name: 'pureskin', logo: 'assets/img/brand/Pure Skin.png' },
    { name: 'wolgoo', logo: 'assets/img/brand/wol-goo.png' },
    { name: 'fabyou', logo: 'assets/img/brand/fabyou logo.webp' },
    { name: 'rataplan', logo: 'assets/img/brand/rataplan logo.webp' },
  ];









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

    this.commonService.searhProductData(formData).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          // ✅ Redirect based on filter
          this.router.navigate([this.routes.brandsProducts], {
            queryParams: payload   // filters as query params
          });
          //this.activeCategory = null; 
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }


}

