import { TestBed } from '@angular/core/testing';

import {DetallesHistoricoTipoSituacionResolveService} from "./detalles-historico-tipo-situacion-resolve.service";

describe('DetallesHistoricoTipoSituacionResolveService', () => {
  let service: DetallesHistoricoTipoSituacionResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesHistoricoTipoSituacionResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
