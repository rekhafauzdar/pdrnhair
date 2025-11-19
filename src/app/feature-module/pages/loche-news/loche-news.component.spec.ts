import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocheNewsComponent } from './loche-news.component';

describe('LocheNewsComponent', () => {
  let component: LocheNewsComponent;
  let fixture: ComponentFixture<LocheNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocheNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
