import { TestBed } from '@angular/core/testing';

import { CargaRecursosComunitariosAlarmaService } from './carga-recursos-comunitarios-alarma.service';

describe('CargaRecursosComunitariosAlarmaService', () => {
  let service: CargaRecursosComunitariosAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaRecursosComunitariosAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
