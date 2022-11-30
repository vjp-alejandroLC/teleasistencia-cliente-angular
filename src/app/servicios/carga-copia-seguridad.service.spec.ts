import { TestBed } from '@angular/core/testing';

import { CargaCopiaSeguridadService } from './carga-copia-seguridad.service';

describe('CargaCopiaSeguridadService', () => {
  let service: CargaCopiaSeguridadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaCopiaSeguridadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
