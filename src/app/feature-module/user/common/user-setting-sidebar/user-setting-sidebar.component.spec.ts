import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingSidebarComponent } from './user-setting-sidebar.component';

describe('UserSettingSidebarComponent', () => {
  let component: UserSettingSidebarComponent;
  let fixture: ComponentFixture<UserSettingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSettingSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSettingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
