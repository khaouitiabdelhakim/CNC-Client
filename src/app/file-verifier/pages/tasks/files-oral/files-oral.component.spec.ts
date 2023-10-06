import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesOralComponent } from './files-oral.component';

describe('FilesOralComponent', () => {
  let component: FilesOralComponent;
  let fixture: ComponentFixture<FilesOralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesOralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesOralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
