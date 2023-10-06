import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradeEntryManagerComponent } from './add-grade-entry-manager.component';

describe('AddGradeEntryManagerComponent', () => {
  let component: AddGradeEntryManagerComponent;
  let fixture: ComponentFixture<AddGradeEntryManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGradeEntryManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGradeEntryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
