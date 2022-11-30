import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRelacionTerminalRecursosComunitariosComponent } from './crear-relacion-terminal-recursos-comunitarios.component';

describe('NuevaRelacionTerminalRecursosComunitariosComponent', () => {
  let component: CrearRelacionTerminalRecursosComunitariosComponent;
  let fixture: ComponentFixture<CrearRelacionTerminalRecursosComunitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRelacionTerminalRecursosComunitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRelacionTerminalRecursosComunitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
