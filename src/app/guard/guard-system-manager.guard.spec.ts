import { TestBed } from '@angular/core/testing';

import { GuardSystemManagerGuard } from './guard-system-manager.guard';

describe('GuardSystemManagerGuard', () => {
  let guard: GuardSystemManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardSystemManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
