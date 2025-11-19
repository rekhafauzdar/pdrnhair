import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStoreComponent } from './global-store.component';

describe('GlobalStoreComponent', () => {
  let component: GlobalStoreComponent;
  let fixture: ComponentFixture<GlobalStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
