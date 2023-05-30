import { TestBed } from '@angular/core/testing';

import { ModificarRecursosComunitariosAlarmaResolveService } from './modificar-recursos-comunitarios-alarma-resolve.service';

describe('ModificarRecursosComunitariosAlarmaResolveService', () => {
  let service: ModificarRecursosComunitariosAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarRecursosComunitariosAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
