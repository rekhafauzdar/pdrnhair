import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bSectionComponent } from './b2b-section.component';

describe('B2bSectionComponent', () => {
  let component: B2bSectionComponent;
  let fixture: ComponentFixture<B2bSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B2bSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2bSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
