import { TestBed } from '@angular/core/testing';

import { ResultCountsService } from './result-counts.service';

describe('ResultCountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultCountsService = TestBed.get(ResultCountsService);
    expect(service).toBeTruthy();
  });
});
