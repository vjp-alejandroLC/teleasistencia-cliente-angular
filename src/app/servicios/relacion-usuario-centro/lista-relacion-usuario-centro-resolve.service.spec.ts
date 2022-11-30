import { TestBed } from '@angular/core/testing';

import { ListaRelacionUsuarioCentroResolveService } from './lista-relacion-usuario-centro-resolve.service';

describe('ListaRelacionUsuarioCentroResolveService', () => {
  let service: ListaRelacionUsuarioCentroResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRelacionUsuarioCentroResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
