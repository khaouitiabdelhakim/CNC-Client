import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape1Component } from './inscription-ecrit-etape1.component';

describe('InscriptionEcritEtape1Component', () => {
  let component: InscriptionEcritEtape1Component;
  let fixture: ComponentFixture<InscriptionEcritEtape1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEcritEtape1Component]
    });
    fixture = TestBed.createComponent(InscriptionEcritEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
