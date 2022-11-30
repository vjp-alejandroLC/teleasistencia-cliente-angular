import { TestBed } from '@angular/core/testing';

import { ModificarAlarmaResolveService } from './modificar-alarma-resolve.service';

describe('ModificarAlarmaService', () => {
  let service: ModificarAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
