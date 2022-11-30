import { TestBed } from '@angular/core/testing';

import { CargaCentroSanitarioAlarmaService } from './carga-centro-sanitario-alarma.service';

describe('CargaCentroSanitarioAlarmaService', () => {
  let service: CargaCentroSanitarioAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaCentroSanitarioAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
