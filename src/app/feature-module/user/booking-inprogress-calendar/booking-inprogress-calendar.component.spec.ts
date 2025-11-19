import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInprogressCalendarComponent } from './booking-inprogress-calendar.component';

describe('BookingInprogressCalendarComponent', () => {
  let component: BookingInprogressCalendarComponent;
  let fixture: ComponentFixture<BookingInprogressCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingInprogressCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingInprogressCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
