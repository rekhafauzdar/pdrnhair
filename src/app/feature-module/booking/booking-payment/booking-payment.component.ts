import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css']
})
export class BookingPaymentComponent {
public routes = routes;
showAddNewCard: boolean = false;

toggleAddNewCard() {
    this.showAddNewCard = !this.showAddNewCard;
}
constructor(private router: Router) { }

  continueBooking() {
    this.router.navigate(['/booking/booking-success']);
  }
}
