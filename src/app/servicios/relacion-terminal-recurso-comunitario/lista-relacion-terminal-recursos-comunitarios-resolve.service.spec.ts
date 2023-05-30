import { TestBed } from '@angular/core/testing';

import { ListaRelacionTerminalRecursosComunitariosResolveService } from './lista-relacion-terminal-recursos-comunitarios-resolve.service';

describe('ListaRelacionTerminalRecursosComunitariosService', () => {
  let service: ListaRelacionTerminalRecursosComunitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRelacionTerminalRecursosComunitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
