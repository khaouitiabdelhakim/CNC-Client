import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritResumeComponent } from './inscription-ecrit-resume.component';

describe('InscriptionEcritResumeComponent', () => {
  let component: InscriptionEcritResumeComponent;
  let fixture: ComponentFixture<InscriptionEcritResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEcritResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionEcritResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
