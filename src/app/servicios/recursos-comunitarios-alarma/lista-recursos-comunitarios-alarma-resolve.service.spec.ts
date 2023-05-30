import { TestBed } from '@angular/core/testing';

import { ListaRecursosComunitariosAlarmaResolveService } from './lista-recursos-comunitarios-alarma-resolve.service';

describe('ListaRecursosComunitariosAlarmaResolveService', () => {
  let service: ListaRecursosComunitariosAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRecursosComunitariosAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
