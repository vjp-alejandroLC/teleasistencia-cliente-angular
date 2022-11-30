import { TestBed } from '@angular/core/testing';

import {CargaHistoricoTipoSituacionService} from "./carga-historico-tipo-situacion.service";

describe('CargaHistoricoTipoSituacionService', () => {
  let service: CargaHistoricoTipoSituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaHistoricoTipoSituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
