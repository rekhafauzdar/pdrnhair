import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAdonComponent } from './booking-adon.component';

describe('BookingAdonComponent', () => {
  let component: BookingAdonComponent;
  let fixture: ComponentFixture<BookingAdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingAdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingAdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
