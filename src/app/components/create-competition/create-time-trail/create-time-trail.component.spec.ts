import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeTrailComponent } from './create-time-trail.component';

describe('CreateTimeTrailComponent', () => {
  let component: CreateTimeTrailComponent;
  let fixture: ComponentFixture<CreateTimeTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimeTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
