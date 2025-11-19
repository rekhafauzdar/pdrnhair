import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCancelledCalendarComponent } from './booking-cancelled-calendar.component';

describe('BookingCancelledCalendarComponent', () => {
  let component: BookingCancelledCalendarComponent;
  let fixture: ComponentFixture<BookingCancelledCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCancelledCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingCancelledCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
