import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMarksComponent } from './enter-marks.component';

describe('EnterMarksComponent', () => {
  let component: EnterMarksComponent;
  let fixture: ComponentFixture<EnterMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
