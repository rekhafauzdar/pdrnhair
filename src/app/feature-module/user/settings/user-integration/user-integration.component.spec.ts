import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIntegrationComponent } from './user-integration.component';

describe('UserIntegrationComponent', () => {
  let component: UserIntegrationComponent;
  let fixture: ComponentFixture<UserIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIntegrationComponent]
    });
    fixture = TestBed.createComponent(UserIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
