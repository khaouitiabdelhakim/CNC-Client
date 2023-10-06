import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOralEtape1Component } from './inscription-oral-etape1.component';

describe('InscriptionOralEtape1Component', () => {
  let component: InscriptionOralEtape1Component;
  let fixture: ComponentFixture<InscriptionOralEtape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionOralEtape1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionOralEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
