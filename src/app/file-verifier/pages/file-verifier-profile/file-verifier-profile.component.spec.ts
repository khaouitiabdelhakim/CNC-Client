import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVerifierProfileComponent } from './file-verifier-profile.component';

describe('FileVerifierProfileComponent', () => {
  let component: FileVerifierProfileComponent;
  let fixture: ComponentFixture<FileVerifierProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileVerifierProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileVerifierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
