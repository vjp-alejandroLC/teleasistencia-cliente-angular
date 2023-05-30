import { TestBed } from '@angular/core/testing';

import { ListaPersonaContactoAlarmaResolveService } from './lista-persona-contacto-alarma-resolve.service';

describe('ListaPersonaContactoAlarmaResolveService', () => {
  let service: ListaPersonaContactoAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPersonaContactoAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
