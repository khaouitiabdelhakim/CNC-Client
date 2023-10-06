import { TestBed } from '@angular/core/testing';

import { GuardValidatedProfileGuard } from './guard-validated-profile.guard';

describe('GuardValidatedProfileGuard', () => {
  let guard: GuardValidatedProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardValidatedProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
