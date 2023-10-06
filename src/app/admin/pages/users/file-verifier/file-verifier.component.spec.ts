import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVerifierComponent } from './file-verifier.component';

describe('FileVerifierComponent', () => {
  let component: FileVerifierComponent;
  let fixture: ComponentFixture<FileVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileVerifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
