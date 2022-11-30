import { TestBed } from '@angular/core/testing';

import { CargaPersonaContactoAlarmaService } from './carga-persona-contacto-alarma.service';

describe('CargaPersonaContactoAlarmaService', () => {
  let service: CargaPersonaContactoAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaPersonaContactoAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
