import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnCancellationComponent } from './return-cancellation.component';

const routes: Routes = [{ path: '', component: ReturnCancellationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnCancellationRoutingModule { }
