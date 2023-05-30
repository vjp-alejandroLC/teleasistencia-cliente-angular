import { TestBed } from '@angular/core/testing';

import { ModificarCentroSanitarioAlarmaResolveService } from './modificar-centro-sanitario-alarma-resolve.service';

describe('ModificarCentroSanitarioAlarmaResolveService', () => {
  let service: ModificarCentroSanitarioAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarCentroSanitarioAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
