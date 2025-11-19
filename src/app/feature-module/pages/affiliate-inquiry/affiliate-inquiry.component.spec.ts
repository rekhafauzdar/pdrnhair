import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateInquiryComponent } from './affiliate-inquiry.component';

describe('AffiliateInquiryComponent', () => {
  let component: AffiliateInquiryComponent;
  let fixture: ComponentFixture<AffiliateInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliateInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
