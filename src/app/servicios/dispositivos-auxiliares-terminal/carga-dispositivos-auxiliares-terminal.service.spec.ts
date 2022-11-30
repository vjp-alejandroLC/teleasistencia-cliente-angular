import { TestBed } from '@angular/core/testing';

import { CargaDispositivosAuxiliaresTerminalService } from './carga-dispositivos-auxiliares-terminal.service';

describe('CargaDispositivosAuxiliaresTerminalService', () => {
  let service: CargaDispositivosAuxiliaresTerminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaDispositivosAuxiliaresTerminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
