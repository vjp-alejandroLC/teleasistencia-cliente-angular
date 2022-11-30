import { TestBed } from '@angular/core/testing';

import { ListaCopiaSeguridadService } from './lista-copia-seguridad.service';

describe('ListaCopiaSeguridadService', () => {
  let service: ListaCopiaSeguridadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCopiaSeguridadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
