import { TestBed } from '@angular/core/testing';

import { FeePaymentService } from './fee-payment.service';

describe('FeePaymentService', () => {
  let service: FeePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
