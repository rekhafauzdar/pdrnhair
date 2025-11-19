import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanRoomComponent } from './clean-room.component';

describe('CleanRoomComponent', () => {
  let component: CleanRoomComponent;
  let fixture: ComponentFixture<CleanRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
