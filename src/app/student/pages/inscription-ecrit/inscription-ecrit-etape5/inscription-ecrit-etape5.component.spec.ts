import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape5Component } from './inscription-ecrit-etape5.component';

describe('InscriptionEcritEtape5Component', () => {
  let component: InscriptionEcritEtape5Component;
  let fixture: ComponentFixture<InscriptionEcritEtape5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEcritEtape5Component]
    });
    fixture = TestBed.createComponent(InscriptionEcritEtape5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
