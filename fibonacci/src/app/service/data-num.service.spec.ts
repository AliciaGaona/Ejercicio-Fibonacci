import { TestBed } from '@angular/core/testing';

import { DataNumService } from './data-num.service';

describe('DataNumService', () => {
  let service: DataNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
