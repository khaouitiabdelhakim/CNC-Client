import { TestBed } from '@angular/core/testing';

import { CncServiceService } from './cnc-service.service';

describe('CncServiceService', () => {
  let service: CncServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CncServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
