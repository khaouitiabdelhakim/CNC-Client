import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTipeComponent } from './verify-tipe.component';

describe('VerifyTipeComponent', () => {
  let component: VerifyTipeComponent;
  let fixture: ComponentFixture<VerifyTipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyTipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyTipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
