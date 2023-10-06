import { TestBed } from '@angular/core/testing';

import { FileVerifierServiceService } from './file-verifier-service.service';

describe('FileVerifierServiceService', () => {
  let service: FileVerifierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileVerifierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
