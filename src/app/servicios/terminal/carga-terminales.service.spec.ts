import { TestBed } from '@angular/core/testing';

import { CargaTerminalesService } from './carga-terminales.service';

describe('CargarAlarmasService', () => {
  let service: CargaTerminalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTerminalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
