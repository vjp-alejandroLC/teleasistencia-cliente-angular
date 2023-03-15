import { TestBed } from '@angular/core/testing';

import { ResolveRecursosService } from './resolve-recursos.service';

describe('ResolveRecursosService', () => {
  let service: ResolveRecursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveRecursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
