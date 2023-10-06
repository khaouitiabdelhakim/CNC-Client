import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedFilesComponent } from './verified-files.component';

describe('VerifiedFilesComponent', () => {
  let component: VerifiedFilesComponent;
  let fixture: ComponentFixture<VerifiedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
