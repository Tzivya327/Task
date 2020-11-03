import { TestBed } from '@angular/core/testing';

import { NbsTaskService } from './nbs-task.service';

describe('NbsTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbsTaskService = TestBed.get(NbsTaskService);
    expect(service).toBeTruthy();
  });
});
