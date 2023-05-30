import { TestBed } from '@angular/core/testing';

import { ListaCentrosSanitariosAlarmaResolveService } from './lista-centros-sanitarios-alarma-resolve.service';

describe('ListaCentrosSanitariosAlarmaResolveService', () => {
  let service: ListaCentrosSanitariosAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCentrosSanitariosAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
