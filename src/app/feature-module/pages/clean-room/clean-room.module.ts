import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CleanRoomComponent } from './clean-room.component';
import { CleanRoomRoutingModule } from './clean-room-routing.module';


@NgModule({
  declarations: [
    CleanRoomComponent
  ],
  imports: [
    CommonModule,
    CleanRoomRoutingModule,
    SharedModule
  ]
})
export class CleanRoomModule { }