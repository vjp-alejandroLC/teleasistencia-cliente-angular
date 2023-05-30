import { TestBed } from '@angular/core/testing';

import {DetallesTerminalResolveService} from "./detalles-terminal-resolve.service";

describe('DetallesTerminalResolveService', () => {
  let service: DetallesTerminalResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTerminalResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
