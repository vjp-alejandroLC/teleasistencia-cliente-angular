import { TestBed } from '@angular/core/testing';

import { ListaAlarmasResolveService } from './lista-alarmas-resolve.service';

describe('ListaAlarmaService', () => {
  let service: ListaAlarmasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAlarmasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
