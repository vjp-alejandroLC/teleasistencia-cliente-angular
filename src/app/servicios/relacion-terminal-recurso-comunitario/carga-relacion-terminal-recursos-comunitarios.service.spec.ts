import { TestBed } from '@angular/core/testing';

import { CargaRelacionTerminalRecursosComunitariosService } from './carga-relacion-terminal-recursos-comunitarios.service';

describe('RelacioTerminalRecursosComunitariosService', () => {
  let service: CargaRelacionTerminalRecursosComunitariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaRelacionTerminalRecursosComunitariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
