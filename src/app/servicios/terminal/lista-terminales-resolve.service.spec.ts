import { TestBed } from '@angular/core/testing';

import { ListaTerminalesResolveService } from './lista-terminales-resolve.service';

describe('ListaAlarmasService', () => {
  let service: ListaTerminalesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTerminalesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
