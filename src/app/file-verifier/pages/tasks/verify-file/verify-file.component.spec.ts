import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyFileComponent } from './verify-file.component';

describe('VerifyFileComponent', () => {
  let component: VerifyFileComponent;
  let fixture: ComponentFixture<VerifyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
