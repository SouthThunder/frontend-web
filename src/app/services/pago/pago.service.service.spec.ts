import { TestBed } from '@angular/core/testing';

import { PagoServiceService } from './pago.service.service';

describe('PagoServiceService', () => {
  let service: PagoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
