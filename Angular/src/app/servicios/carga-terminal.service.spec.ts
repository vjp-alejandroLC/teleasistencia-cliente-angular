import { TestBed } from '@angular/core/testing';

import {CargarTerminalService} from "./carga-terminal.service";

describe('CargarTerminalService', () => {
  let service: CargarTerminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarTerminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
