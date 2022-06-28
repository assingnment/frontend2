import { TestBed } from '@angular/core/testing';

import { HomenoticeService } from './homenotice.service';

describe('HomenoticeService', () => {
  let service: HomenoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomenoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
