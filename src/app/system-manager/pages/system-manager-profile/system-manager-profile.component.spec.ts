import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemManagerProfileComponent } from './system-manager-profile.component';

describe('SystemManagerProfileComponent', () => {
  let component: SystemManagerProfileComponent;
  let fixture: ComponentFixture<SystemManagerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemManagerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
