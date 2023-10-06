import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEntryAgentComponent } from './grade-entry-agent.component';

describe('GradeEntryAgentComponent', () => {
  let component: GradeEntryAgentComponent;
  let fixture: ComponentFixture<GradeEntryAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeEntryAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeEntryAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
