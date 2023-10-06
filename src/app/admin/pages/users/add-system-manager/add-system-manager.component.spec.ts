import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemManagerComponent } from './add-system-manager.component';

describe('AddSystemManagerComponent', () => {
  let component: AddSystemManagerComponent;
  let fixture: ComponentFixture<AddSystemManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSystemManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSystemManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
