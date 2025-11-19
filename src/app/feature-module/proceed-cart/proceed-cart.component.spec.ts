import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedCartComponent } from './proceed-cart.component';

describe('ProceedCartComponent', () => {
  let component: ProceedCartComponent;
  let fixture: ComponentFixture<ProceedCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceedCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
