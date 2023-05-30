import { TestBed } from '@angular/core/testing';

import { BorrarRelacionTerminalRecursoComunitarioService } from './borrar-relacion-terminal-recurso-comunitario.service';

describe('BorrarRelacionTerminalRecursoComunitarioService', () => {
  let service: BorrarRelacionTerminalRecursoComunitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrarRelacionTerminalRecursoComunitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
