import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingUpcomingCalendarComponent } from './booking-upcoming-calendar.component';

describe('BookingUpcomingCalendarComponent', () => {
  let component: BookingUpcomingCalendarComponent;
  let fixture: ComponentFixture<BookingUpcomingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingUpcomingCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingUpcomingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
