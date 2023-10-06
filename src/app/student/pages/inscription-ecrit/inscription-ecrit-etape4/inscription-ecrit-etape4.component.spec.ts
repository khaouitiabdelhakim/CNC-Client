import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape4Component } from './inscription-ecrit-etape4.component';

describe('InscriptionEcritEtape4Component', () => {
  let component: InscriptionEcritEtape4Component;
  let fixture: ComponentFixture<InscriptionEcritEtape4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEcritEtape4Component]
    });
    fixture = TestBed.createComponent(InscriptionEcritEtape4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
