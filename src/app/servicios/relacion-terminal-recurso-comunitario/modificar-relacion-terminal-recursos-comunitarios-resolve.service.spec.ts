import { TestBed } from '@angular/core/testing';

import { ModificarRelacionTerminalRecursosComunitariosResolveService } from './modificar-relacion-terminal-recursos-comunitarios-resolve.service';

describe('ModificarRelacionTerminalRecursosComunitariosService', () => {
  let service: ModificarRelacionTerminalRecursosComunitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarRelacionTerminalRecursosComunitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
