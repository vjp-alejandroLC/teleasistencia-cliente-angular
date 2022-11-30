import { TestBed } from '@angular/core/testing';

import { ModificarTipoRecursoComunitarioResolveService } from './modificar-tipo-recurso-comunitario-resolve.service';

describe('DetallesTipoRecursoComunitarioResolveService', () => {
  let service: ModificarTipoRecursoComunitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTipoRecursoComunitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
