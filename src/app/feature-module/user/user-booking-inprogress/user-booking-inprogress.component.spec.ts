import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingInprogressComponent } from './user-booking-inprogress.component';

describe('UserBookingInprogressComponent', () => {
  let component: UserBookingInprogressComponent;
  let fixture: ComponentFixture<UserBookingInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookingInprogressComponent]
    });
    fixture = TestBed.createComponent(UserBookingInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
