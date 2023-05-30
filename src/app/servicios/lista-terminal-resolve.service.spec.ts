import { TestBed } from '@angular/core/testing';

import {ListaTerminalResolveService} from "./lista-terminal-resolve.service";

describe('ListaTerminalResolveService', () => {
  let service: ListaTerminalResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTerminalResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
