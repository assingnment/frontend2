import { TestBed } from '@angular/core/testing';

import { BooklistdataService } from './booklistdata.service';

describe('BooklistdataService', () => {
  let service: BooklistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
