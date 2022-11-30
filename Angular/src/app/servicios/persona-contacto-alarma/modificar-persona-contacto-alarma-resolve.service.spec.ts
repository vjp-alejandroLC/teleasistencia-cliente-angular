import { TestBed } from '@angular/core/testing';

import { ModificarPersonaContactoAlarmaResolveService } from './modificar-persona-contacto-alarma-resolve.service';

describe('ModificarPersonaContactoAlarmaResolveService', () => {
  let service: ModificarPersonaContactoAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarPersonaContactoAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
