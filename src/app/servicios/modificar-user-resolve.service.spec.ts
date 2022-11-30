import { TestBed } from '@angular/core/testing';

import { ModificarUserResolveService } from './modificar-user-resolve.service';

describe('DetallesUserResolveService', () => {
  let service: ModificarUserResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarUserResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
