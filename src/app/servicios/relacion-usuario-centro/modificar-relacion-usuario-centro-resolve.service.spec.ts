import { TestBed } from '@angular/core/testing';

import { ModificarRelacionUsuarioCentroResolveService } from './modificar-relacion-usuario-centro-resolve.service';

describe('ModificarRelacionUsuarioCentroResolveService', () => {
  let service: ModificarRelacionUsuarioCentroResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarRelacionUsuarioCentroResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
