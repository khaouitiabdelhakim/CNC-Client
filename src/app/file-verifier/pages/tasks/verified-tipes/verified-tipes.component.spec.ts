import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedTipesComponent } from './verified-tipes.component';

describe('VerifiedTipesComponent', () => {
  let component: VerifiedTipesComponent;
  let fixture: ComponentFixture<VerifiedTipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedTipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedTipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
