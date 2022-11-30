import { TestBed } from '@angular/core/testing';

import { ListaDispositivosAuxiliaresTerminalResolveService } from './lista-dispositivos-auxiliares-terminal-resolve.service';

describe('ListaDispositivosAuxiliaresTerminalResolveService', () => {
  let service: ListaDispositivosAuxiliaresTerminalResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDispositivosAuxiliaresTerminalResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
