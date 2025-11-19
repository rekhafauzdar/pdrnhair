import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossBorderComponent } from './cross-border.component';

describe('CrossBorderComponent', () => {
  let component: CrossBorderComponent;
  let fixture: ComponentFixture<CrossBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossBorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
