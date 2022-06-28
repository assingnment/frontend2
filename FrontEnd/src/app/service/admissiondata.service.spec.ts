import { TestBed } from '@angular/core/testing';

import { AdmissiondataService } from './admissiondata.service';

describe('AdmissiondataService', () => {
  let service: AdmissiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
