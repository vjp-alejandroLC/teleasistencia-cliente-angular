import { TestBed } from '@angular/core/testing';

import {ListaHistoricoAgendaResolveService} from "./lista-historico-agenda-resolve.service";

describe('ListaHistoricoAgendaResolveService', () => {
  let service: ListaHistoricoAgendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaHistoricoAgendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
