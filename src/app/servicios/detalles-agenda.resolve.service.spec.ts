import { TestBed } from '@angular/core/testing';

import {DetallesAgendaResolveService} from "./detalles-agenda.resolve.service";

describe('DetallesAgendaService', () => {
  let service: DetallesAgendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesAgendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
