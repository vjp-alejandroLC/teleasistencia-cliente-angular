import { TestBed } from '@angular/core/testing';

import { ModificarDispositivosAuxiliaresTerminalResolveService } from './modificar-dispositivos-auxiliares-terminal-resolve.service';

describe('ModificarDispositivosAuxiliaresTerminalResolveService', () => {
  let service: ModificarDispositivosAuxiliaresTerminalResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarDispositivosAuxiliaresTerminalResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
