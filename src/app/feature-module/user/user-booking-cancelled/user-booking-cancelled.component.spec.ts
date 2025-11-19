import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingCancelledComponent } from './user-booking-cancelled.component';

describe('UserBookingCancelledComponent', () => {
  let component: UserBookingCancelledComponent;
  let fixture: ComponentFixture<UserBookingCancelledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookingCancelledComponent]
    });
    fixture = TestBed.createComponent(UserBookingCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
