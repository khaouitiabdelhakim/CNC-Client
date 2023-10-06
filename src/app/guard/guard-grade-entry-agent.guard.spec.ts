import { TestBed } from '@angular/core/testing';

import { GuardGradeEntryAgentGuard } from './guard-grade-entry-agent.guard';

describe('GuardGradeEntryAgentGuard', () => {
  let guard: GuardGradeEntryAgentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardGradeEntryAgentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
