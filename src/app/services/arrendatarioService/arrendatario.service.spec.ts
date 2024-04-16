import { TestBed } from '@angular/core/testing';

import { ArrendatarioService } from './arrendatario.service';

describe('ArrendatarioService', () => {
  let service: ArrendatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrendatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
