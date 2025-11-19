import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingAdonComponent } from './booking-adon.component';

const routes: Routes = [{ path: '', component: BookingAdonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingAdonRoutingModule { }
