import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActualiteComponent } from './add-actualite.component';

describe('AddActualiteComponent', () => {
  let component: AddActualiteComponent;
  let fixture: ComponentFixture<AddActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
