import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {
  public routes = routes
  ProfessionalOwlOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:true,
			dots:false,
			smartSpeed: 2000,
			autoplay:false,
      navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
      responsive:{
				0:{
					items:1
				},				
				550:{
					items:3
				},
				768:{
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
  carOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: true,
    loop: true,
    rtl: false,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  locationOwlOptions: OwlOptions = {
    loop: true,
			margin: 15,
			dots: false,
			nav: true,
			navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
      responsive: {
				0: {
					items: 1
				},
				500: {
					items: 2
				},
				768: {
					items: 3
				},
				1000: {
					items: 3
				},
				1300: {
					items: 4
				}
			}
  };
  yachtOwlOptions: OwlOptions = {
    loop: true,
    margin: 1,
    dots: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  };
  yachttypeOwlOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:false,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
      responsive:{
				0:{
					items:2
				},
				
				550:{
					items:8
				},
				1200:{
					items:8
				},
				1400:{
					items:10
				}
			}
  };
  popularlocationOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: 'Choose Location' },
    { value: 'Newyork' },
    
  ];
  selectedList2: data[] = [
    { value: 'Catamaran' },
    { value: 'Motor yachts' },
    { value: 'Sailing yachts' },
    
  ];
  bannerimgOwlOptions: OwlOptions = {
    loop:true,
			margin:2,
			nav:true,
			dots: false,
			autoplay:false,
			smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
        0:{
          items:1
        },
        
        550:{
          items:1
        },
        700:{
          items:1
        },
        1000:{
          items:1
        },
        1200:{
          items:1
        }
      }
  };
}
