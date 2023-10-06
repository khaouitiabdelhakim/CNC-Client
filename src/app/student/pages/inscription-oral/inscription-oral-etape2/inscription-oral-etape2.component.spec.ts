import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOralEtape2Component } from './inscription-oral-etape2.component';

describe('InscriptionOralEtape2Component', () => {
  let component: InscriptionOralEtape2Component;
  let fixture: ComponentFixture<InscriptionOralEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionOralEtape2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionOralEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
