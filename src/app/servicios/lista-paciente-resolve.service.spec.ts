import { TestBed } from '@angular/core/testing';

import {ListaPacientesResolveService} from "./lista-paciente-resolve.service";

describe('ListaPacientesResolveService', () => {
  let service: ListaPacientesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPacientesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
