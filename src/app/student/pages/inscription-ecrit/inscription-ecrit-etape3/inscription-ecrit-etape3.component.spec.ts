import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape3Component } from './inscription-ecrit-etape3.component';

describe('InscriptionEcritEtape3Component', () => {
  let component: InscriptionEcritEtape3Component;
  let fixture: ComponentFixture<InscriptionEcritEtape3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEcritEtape3Component]
    });
    fixture = TestBed.createComponent(InscriptionEcritEtape3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
