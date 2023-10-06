import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOralEtape3Component } from './inscription-oral-etape3.component';

describe('InscriptionOralEtape3Component', () => {
  let component: InscriptionOralEtape3Component;
  let fixture: ComponentFixture<InscriptionOralEtape3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionOralEtape3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionOralEtape3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
