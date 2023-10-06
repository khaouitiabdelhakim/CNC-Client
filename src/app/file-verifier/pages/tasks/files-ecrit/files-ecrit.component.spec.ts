import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesEcritComponent } from './files-ecrit.component';

describe('FilesEcritComponent', () => {
  let component: FilesEcritComponent;
  let fixture: ComponentFixture<FilesEcritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesEcritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesEcritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
