import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import {  testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}


@Component({
  selector: 'app-b2b-section',
  templateUrl: './b2b-section.component.html',
  styleUrl: './b2b-section.component.css'
})
export class B2bSectionComponent {
    public routes = routes
    public thumbnails1: thumbnails1[] = [];
    public testimonials: testimonials[] = [];
   
    constructor(private data: DataService, private datePipe: DatePipe) {
      this.testimonials = this.data.testimonials;
      this.thumbnails1 = this.data.thumbnails1;
      
      
    }
  secondsection: OwlOptions = {
    loop:true,
    margin:24,
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
        items:2
      },
      1000:{
        items:3
      },
      1200:{
        items:3
      },
      1400:{
        items:3
      }
    },
  };
    PromotionProduct: OwlOptions = {
    loop:true,
    margin:17,
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
        items:4
      },
      700:{
        items:4
      },
      1000:{
        items:5
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
   brands = [
    { name: 'add', logo: 'assets/img/brand/bellaluna.png', link: '/brands/lakme' },
    { name: 'bio-ones', logo: 'assets/img/brand/bio-ones.png', link: '/brands/maybelline' },
    { name: 'dr.-blue', logo: 'assets/img/brand/dr.-blue.png', link: '/brands/face-shop' },
    { name: 'estilo', logo: 'assets/img/brand/estilo.png', link: '/brands/innisfree' },
    { name: 'glossys', logo: 'assets/img/brand/glossys.png', link: '/brands/innisfree' },
    { name: 'Lalachuu', logo: 'assets/img/brand/lalachuu.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/medicell-bio.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/OSEQUE.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/TOAS.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/new-brands1.png', link: '/brands/innisfree' },
   { name: 'add', logo: 'assets/img/brand/new-brands2.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands3.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands4.jpg', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands5.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands6.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands7.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands8.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands9.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands10.webp', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands11.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands12.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands13.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands14.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands15.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands16.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands17.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/Pure Skin.png', link: '/pages/pureskin' },
{ name: 'add', logo: 'assets/img/brand/wol-goo.png', link: '/pages/wolgoo' },
{ name: 'add', logo: 'assets/img/brand/fabyou logo.webp', link: '/pages/fabyou' },
{ name: 'add', logo: 'assets/img/brand/rataplan logo.webp', link: '/pages/rataplan' },
  ];
 formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
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
}
