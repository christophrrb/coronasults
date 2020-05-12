import { TestBed } from '@angular/core/testing';

import { ModifyResultService } from './modify-result.service';

describe('ModifyResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyResultService = TestBed.get(ModifyResultService);
    expect(service).toBeTruthy();
  });
});
