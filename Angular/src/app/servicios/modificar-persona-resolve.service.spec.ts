import { TestBed } from '@angular/core/testing';

import { ModificarPersonaResolveService } from './modificar-persona-resolve.service';

describe('DetallesPersonaResolveService', () => {
  let service: ModificarPersonaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarPersonaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
