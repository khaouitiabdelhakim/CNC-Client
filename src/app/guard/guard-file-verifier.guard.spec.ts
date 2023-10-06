import { TestBed } from '@angular/core/testing';

import { GuardFileVerifierGuard } from './guard-file-verifier.guard';

describe('GuardFileVerifierGuard', () => {
  let guard: GuardFileVerifierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardFileVerifierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
