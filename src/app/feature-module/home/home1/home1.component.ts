import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import {  testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class HomeComponent implements AfterViewInit{
public routes = routes
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];
 
  constructor(private data: DataService, private datePipe: DatePipe) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;
    
    
  }
  contactNow() {
    alert('Contact form or chat popup triggered!');
  }



  newArrivalProducts = [
  {
    image: 'assets/img/product/fab-you1.webp',
    title: 'Retinol Peptide Youthful Serum',
    brandname:'febyou',
    price: 1596,
    oldPrice: null,
    discount: null
  },
  {
    image: 'assets/img/product/product-2.avif',
    title: 'Plum Simply Bright 2% Niacinamide Face Wash With',
    brandname:'Plum',
    price: 299,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you2.webp',
    title: 'Rice Glow Foam Toner',
    brandname:'febyou',
    price: 1191,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you3.webp',
    title: 'KRice Mask Cleanser',
    brandname:'febyou',
    price: 1407,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan-6.jpg',
    title: 'Donghae Deep Moisturizing Cream 1+1',
    brandname:'Ratiplan',
    price: 2000,
    oldPrice: null,
    discount: null,
  }
];

//   promotionProducts = [
//   {
//     image: 'assets/img/banners/Loche Tox 100Unit.jpg',
//     title: 'Loche Tox 100Unit',
//   },
//   {
//     image: 'assets/img/banners/Loche Tox 200Unit.jpg',
//     title: 'Loche Tox 200Unit ',
//   },
//   {
//     image: 'assets/img/banners/PDRNelle.jpg',
//     title: 'Pdrnelle ',
//   },
//   {
//     image: 'assets/img/banners/IMG-20251025-WA0033.jpg',
//     title: 'Pdrnelle skinbooster',
//   },
//   {
//     image: 'assets/img/banners/Loche injector .jpg',
//     title: 'Loche injector',
//   },
//     {
//     image: 'assets/img/banners/Pdrnelle vega shine.jpg',
//     title: 'Pdrnelle vega shine',
//   },
//       {
//     image: 'assets/img/banners/pdrnelle V .jpg',
//     title: 'Pdrnelle V',
//   },
//   //       {
//   //   image: 'assets/img/banners/rejuvenex_forte_product_image_1.webp',
//   //   title: 'Rejuvenex Forte',
//   // },
// ];


promotionProducts = [
  {
    image: 'assets/img/videos/product.png',
    title: 'HOME.PROMO.DERMA_PN_Eye',
  },
  {
    image: 'assets/img/videos/product.png',
    title: 'HOME.PROMO.DERMA_PN_1',
  },
  {
    image: 'assets/img/videos/product.png',
    title: 'HOME.PROMO.DERMA_PN_2',
  },
  {
    image: 'assets/img/videos/product.png',
    title: 'HOME.PROMO.DERMA_PN_3',
  },
];



  secondsection: OwlOptions = {
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:true,
    smartSpeed: 1000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:2
      },
      700:{
        items:3
      },
      1000:{
        items:3
      },
      1200:{
        items:3
      },

    },
  };
  firstsecOptions: OwlOptions = {
    loop:true,
    margin:20,
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
        items:4
      },
      700:{
        items:5
      },
      1000:{
        items:6
      },
      1200:{
        items:7
      },

    },
  };
  categorysec: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
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
      },
      1200:{
        items:5
      }
    }
  };
  BrandsliderOwlOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
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
        items:7
      },
      1200:{
        items:7
      }
    }
  };
  TopBrands: OwlOptions = {
   loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
    NewArrival: OwlOptions = {
   loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
  
  pramotionsec: OwlOptions = {
   loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };

  public ngAfterViewInit(): void{
    window.dispatchEvent(new Event('resize'))
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-thumbnails'
  };

  thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
}
