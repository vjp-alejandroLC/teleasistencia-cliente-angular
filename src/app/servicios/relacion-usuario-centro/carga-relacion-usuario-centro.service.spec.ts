import { TestBed } from '@angular/core/testing';

import { CargaRelacionUsuarioCentroService } from './carga-relacion-usuario-centro.service';

describe('CargaRelacionUsuarioCentroService', () => {
  let service: CargaRelacionUsuarioCentroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaRelacionUsuarioCentroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
