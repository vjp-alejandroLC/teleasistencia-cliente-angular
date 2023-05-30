import { TestBed } from '@angular/core/testing';

import { ModificarViviendaResolveService } from './modificar-vivienda-resolve.service';

describe('DetallesViviendaResolveService', () => {
  let service: ModificarViviendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarViviendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
