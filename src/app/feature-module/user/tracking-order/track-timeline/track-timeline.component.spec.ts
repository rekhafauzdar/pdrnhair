import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTimelineComponent } from './track-timeline.component';

describe('TrackTimelineComponent', () => {
  let component: TrackTimelineComponent;
  let fixture: ComponentFixture<TrackTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
