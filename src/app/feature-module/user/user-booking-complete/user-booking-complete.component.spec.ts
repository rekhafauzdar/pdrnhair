import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingCompleteComponent } from './user-booking-complete.component';

describe('UserBookingCompleteComponent', () => {
  let component: UserBookingCompleteComponent;
  let fixture: ComponentFixture<UserBookingCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookingCompleteComponent]
    });
    fixture = TestBed.createComponent(UserBookingCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
