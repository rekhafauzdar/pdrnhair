import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carousel } from 'src/app/shared/services/model/model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-b2b',
  templateUrl: './b2b.component.html',
  styleUrl: './b2b.component.css'
})
export class B2bComponent {
  public carousel: Array<carousel> = [];
  public routes = routes;

  constructor(public data: DataService ,private viewportScroller: ViewportScroller ) {
    this.carousel = this.data.carousel;
  }
   ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
}
