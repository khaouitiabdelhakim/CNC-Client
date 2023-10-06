import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcritEtape6Component } from './inscription-ecrit-etape6.component';

describe('InscriptionEcritEtape6Component', () => {
  let component: InscriptionEcritEtape6Component;
  let fixture: ComponentFixture<InscriptionEcritEtape6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEcritEtape6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionEcritEtape6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
