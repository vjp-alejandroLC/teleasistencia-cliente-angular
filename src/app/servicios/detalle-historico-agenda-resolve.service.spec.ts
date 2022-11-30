import { TestBed } from '@angular/core/testing';

import {DetalleHistoricoAgendaResolveService} from "./detalle-historico-agenda-resolve.service";

describe('DetalleHistoricoAgendaResolveService', () => {
  let service: DetalleHistoricoAgendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleHistoricoAgendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
