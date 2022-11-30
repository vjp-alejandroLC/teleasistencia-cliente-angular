import { TestBed } from '@angular/core/testing';

import { ModificarTipoAlarmaResolveService } from './modificar-tipo-alarma-resolve.service';

describe('DetallesTipoAlarmaResolveService', () => {
  let service: ModificarTipoAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTipoAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
