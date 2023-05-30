import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionTerminalRecursosComunitariosComponent } from './lista-relacion-terminal-recursos-comunitarios.component';

describe('ListaRelacionTerminalRecursosComunitariosComponent', () => {
  let component: ListaRelacionTerminalRecursosComunitariosComponent;
  let fixture: ComponentFixture<ListaRelacionTerminalRecursosComunitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRelacionTerminalRecursosComunitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionTerminalRecursosComunitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
