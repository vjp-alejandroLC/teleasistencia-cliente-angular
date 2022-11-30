import { TestBed } from '@angular/core/testing';

import {CargaTipoAgendaService} from "./carga-tipo-agenda.service";

describe('CargaTipoAgendaService', () => {
  let service: CargaTipoAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTipoAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
