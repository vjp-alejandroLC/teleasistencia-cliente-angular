import { TestBed } from '@angular/core/testing';

import {ListaTiposAgendaResolveService} from "./lista-tipo-agenda-resolve.service";

describe('ListaTipoAgendaResolveService', () => {
  let service: ListaTiposAgendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTiposAgendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
