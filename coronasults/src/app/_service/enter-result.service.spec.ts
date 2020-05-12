import { TestBed } from '@angular/core/testing';

import { EnterResultService } from './enter-result.service';

describe('EnterResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterResultService = TestBed.get(EnterResultService);
    expect(service).toBeTruthy();
  });
});
