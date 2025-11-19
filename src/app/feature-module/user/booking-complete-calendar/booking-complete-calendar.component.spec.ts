import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCompleteCalendarComponent } from './booking-complete-calendar.component';

describe('BookingCompleteCalendarComponent', () => {
  let component: BookingCompleteCalendarComponent;
  let fixture: ComponentFixture<BookingCompleteCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCompleteCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingCompleteCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
