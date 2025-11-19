import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: 'booking-payment',
        loadChildren: () =>
          import('./booking-payment/booking-payment.module').then(
            (m) => m.BookingPaymentModule
          ),
      },
      {
        path: 'booking-list',
        loadChildren: () =>
          import('./booking-list/booking-list.module').then(
            (m) => m.BookingListModule
          ),
      },
      {
        path: 'invoice-details',
        loadChildren: () =>
          import('./invoice-details/invoice-details.module').then(
            (m) => m.InvoiceDetailsModule
          ),
      },
    ],
  },
  { path: 'booking-checkout', loadChildren: () => import('./booking-checkout/booking-checkout.module').then(m => m.BookingCheckoutModule) },
  { path: 'booking-success', loadChildren: () => import('./booking-success/booking-success.module').then(m => m.BookingSuccessModule) },
  { path: 'booking-adon', loadChildren: () => import('./booking-adon/booking-adon.module').then(m => m.BookingAdonModule) },
  { path: 'booking-details', loadChildren: () => import('./booking-details/booking-details.module').then(m => m.BookingDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
