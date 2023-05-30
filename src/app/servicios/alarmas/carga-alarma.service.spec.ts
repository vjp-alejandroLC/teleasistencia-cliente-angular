import { TestBed } from '@angular/core/testing';

import { CargaAlarmaService } from './carga-alarma.service';

describe('CargarAlarmaService', () => {
  let service: CargaAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
