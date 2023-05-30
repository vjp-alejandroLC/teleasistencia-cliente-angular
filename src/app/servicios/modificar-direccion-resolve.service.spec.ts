import { TestBed } from '@angular/core/testing';

import { ModificarDireccionResolveService } from './modificar-direccion-resolve.service';

describe('DetallesDireccionResolveService', () => {
  let service: ModificarDireccionResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarDireccionResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
