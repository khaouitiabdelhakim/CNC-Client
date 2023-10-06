import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongMarksComponent } from './wrong-marks.component';

describe('WrongMarksComponent', () => {
  let component: WrongMarksComponent;
  let fixture: ComponentFixture<WrongMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
