import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-checkout',
  templateUrl: './booking-checkout.component.html',
  styleUrl: './booking-checkout.component.css'
})
export class BookingCheckoutComponent {
  public routes = routes
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
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
  constructor( private datePipe: DatePipe,private router: Router) {
    
  }
  hideDeliveryLocation: boolean = false;

    toggleDeliveryLocation() {
        this.hideDeliveryLocation = !this.hideDeliveryLocation;
    }
    
    continueBooking() {
      this.router.navigate(['/booking/booking-adon']);
    }
}
