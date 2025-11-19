import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyBookComponent } from './beauty-book.component';

describe('BeautyBookComponent', () => {
  let component: BeautyBookComponent;
  let fixture: ComponentFixture<BeautyBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
