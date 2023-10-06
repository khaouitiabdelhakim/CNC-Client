import { TestBed } from '@angular/core/testing';

import { GuardStudentGuard } from './guard-student.guard';

describe('GuardStudentGuard', () => {
  let guard: GuardStudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardStudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
