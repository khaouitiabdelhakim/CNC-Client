import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEntryAgentProfileComponent } from './grade-entry-agent-profile.component';

describe('GradeEntryAgentProfileComponent', () => {
  let component: GradeEntryAgentProfileComponent;
  let fixture: ComponentFixture<GradeEntryAgentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeEntryAgentProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeEntryAgentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
