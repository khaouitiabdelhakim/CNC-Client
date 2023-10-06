import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape2Component } from './inscription-ecrit-etape2.component';

describe('InscriptionEcritEtape2Component', () => {
  let component: InscriptionEcritEtape2Component;
  let fixture: ComponentFixture<InscriptionEcritEtape2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEcritEtape2Component]
    });
    fixture = TestBed.createComponent(InscriptionEcritEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
