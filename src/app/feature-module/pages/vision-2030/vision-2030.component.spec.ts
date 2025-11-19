import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vision2030Component } from './vision-2030.component';

describe('Vision2030Component', () => {
  let component: Vision2030Component;
  let fixture: ComponentFixture<Vision2030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vision2030Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vision2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
