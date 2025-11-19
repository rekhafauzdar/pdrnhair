import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialContributionComponent } from './social-contribution.component';

describe('SocialContributionComponent', () => {
  let component: SocialContributionComponent;
  let fixture: ComponentFixture<SocialContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
