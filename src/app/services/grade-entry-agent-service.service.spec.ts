import { TestBed } from '@angular/core/testing';

import { GradeEntryAgentServiceService } from './grade-entry-agent-service.service';

describe('GradeEntryAgentServiceService', () => {
  let service: GradeEntryAgentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeEntryAgentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
