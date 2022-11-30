import { TestBed } from '@angular/core/testing';

import { ModificarRecursoComunitarioResolveService } from './modificar-recurso-comunitario-resolve.service';

describe('DetallesRecursoComunitarioResolveService', () => {
  let service: ModificarRecursoComunitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarRecursoComunitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
