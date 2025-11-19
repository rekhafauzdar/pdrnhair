import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedAdharComponent } from './verified-adhar.component';

describe('VerifiedAdharComponent', () => {
  let component: VerifiedAdharComponent;
  let fixture: ComponentFixture<VerifiedAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedAdharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
