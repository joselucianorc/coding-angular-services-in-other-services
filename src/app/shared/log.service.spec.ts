import { TestBed } from '@angular/core/testing';

import { Log.ServiceService } from './log.service';

describe('Log.ServiceService', () => {
  let service: Log.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Log.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
