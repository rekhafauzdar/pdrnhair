import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { header } from 'src/app/shared/services/model/model';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lightGallery from 'lightgallery';
interface data {
  value: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  @ViewChild('videoGallery') videoGallery!: ElementRef;
  public routes = routes
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
				1200:{
					items:1
				}
			}
  };
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const headerOne = document.querySelector('.header-two');
    if (headerOne && scroll > 35) {
      headerOne.classList.add('header-fixed');
    } else if (headerOne) {
      headerOne.classList.remove('header-fixed');
    }
  }
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService
  ) {
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
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
  
}
