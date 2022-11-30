import { TestBed } from '@angular/core/testing';

import {DetallesTipoAgendaResolveService} from "./detalles-tipo-agenda-resolve.service";

describe('DetallesTipoAgendaResolveService', () => {
  let service: DetallesTipoAgendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoAgendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
