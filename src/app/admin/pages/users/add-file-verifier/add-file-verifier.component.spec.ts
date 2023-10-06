import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileVerifierComponent } from './add-file-verifier.component';

describe('AddFileVerifierComponent', () => {
  let component: AddFileVerifierComponent;
  let fixture: ComponentFixture<AddFileVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFileVerifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFileVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
