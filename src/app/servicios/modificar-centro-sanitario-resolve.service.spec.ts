import { TestBed } from '@angular/core/testing';

import { ModificarCentroSanitarioResolveService } from './modificar-centro-sanitario-resolve.service';

describe('DetallesCentroSanitarioResolveService', () => {
  let service: ModificarCentroSanitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarCentroSanitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
