import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanRoomComponent } from './clean-room.component';

const routes: Routes = [
  {path:"", component:CleanRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CleanRoomRoutingModule { }