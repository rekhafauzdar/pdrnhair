import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-adon',
  templateUrl: './booking-adon.component.html',
  styleUrl: './booking-adon.component.css'
})
export class BookingAdonComponent {
  public routes = routes
  adons = [
    { name: 'GPS Navigation Systems', price: '$25', info: 'Provide GPS navigation devices as add-ons for customers who need assistance with directions and navigation during their rental period.', icon: 'bx-map-pin' },
    { name: 'Wi-Fi Hotspot', price: '$25', info: 'Provide Wi-Fi hotspot devices as add-ons for customers who need internet access during their rental period.', icon: 'bx-wifi' },
    { name: 'Child Safety Seats', price: '$50', info: 'Provide child safety seats as add-ons for customers traveling with children.', icon: 'bx-child' },
    { name: 'Fuel Options', price: '$75', info: 'Provide fuel options as add-ons for customers who prefer to prepay for fuel.', icon: 'bxs-droplet' },
    
  ];
  adons1 = [
    { name: 'Toll Passes', price: '$125', info: 'Provide GPS navigation devices as add-ons for customers who need assistance with directions and navigation during their rental period.', icon: 'bx-map-pin' },
    { name: 'Roadside Assistance', price: '$60', info: 'Provide Wi-Fi hotspot devices as add-ons for customers who need assistance with directions and navigation during their rental period.', icon: 'bx-wifi' },
    { name: 'Satellite Radio', price: '$42', info: 'Provide GPS navigation devices as add-ons for customers who need assistance with directions and navigation during their rental period.', icon: 'bx-child' },
    { name: 'Additional Accessories', price: '$30', info: 'Provide GPS navigation devices as add-ons for customers who need assistance with directions and navigation during their rental period.', icon: 'bxs-droplet' },
    { name: 'Express Check-in/Check-out', price: '$54', info: 'need assistance with directions and navigation during their rental period..', icon: 'bxs-droplet' },
    
  ];

  showMoreInfo: boolean[] = Array(this.adons.length).fill(false);

  toggleMoreInfo(index: number) {
    this.showMoreInfo[index] = !this.showMoreInfo[index];
  }
  
  constructor(private router: Router) { }

  continueBooking() {
    this.router.navigate(['/booking/booking-details']);
  }
  isContentVisible: boolean = false;

  toggleContentVisibility(): void {
    this.isContentVisible = !this.isContentVisible;
  }
 
}
