import { TestBed } from '@angular/core/testing';

import {DetallesPacienteResolveService} from "./detalles-paciente-resolve.service";

describe('DetallesPacienteResolveService', () => {
  let service: DetallesPacienteResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesPacienteResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



