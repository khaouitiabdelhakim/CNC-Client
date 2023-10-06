import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMarksComponent } from './right-marks.component';

describe('RightMarksComponent', () => {
  let component: RightMarksComponent;
  let fixture: ComponentFixture<RightMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
