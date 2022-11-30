import { TestBed } from '@angular/core/testing';

import { ModificarTerminalResolveService } from './modificar-terminal-resolve.service';

describe('ModificarAlarmaService', () => {
  let service: ModificarTerminalResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTerminalResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
