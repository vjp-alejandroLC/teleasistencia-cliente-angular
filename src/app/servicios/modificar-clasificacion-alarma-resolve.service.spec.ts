import { TestBed } from '@angular/core/testing';

import { ModificarClasificacionAlarmaResolveService } from './modificar-clasificacion-alarma-resolve.service';

describe('DetallesClasificacionAlarmaResolveService', () => {
  let service: ModificarClasificacionAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarClasificacionAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
