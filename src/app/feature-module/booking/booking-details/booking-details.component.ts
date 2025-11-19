import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
  public routes = routes
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: '2 Adults, 1 Child' },
    { value: '5 Adults, 2 Child' },
    
  ];
  selectedList2: data[] = [
    { value: 'Country' },
    { value: 'USA' },
    { value: 'UK' },
    
  ];
  constructor(private router: Router) { }

  continueBooking() {
    this.router.navigate(['/booking/booking-payment']);
  }
}
