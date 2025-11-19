import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoGreetingComponent } from './ceo-greeting.component';

describe('CeoGreetingComponent', () => {
  let component: CeoGreetingComponent;
  let fixture: ComponentFixture<CeoGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeoGreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
