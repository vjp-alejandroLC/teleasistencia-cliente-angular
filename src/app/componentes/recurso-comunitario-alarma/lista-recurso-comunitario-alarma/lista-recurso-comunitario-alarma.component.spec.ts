import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecursoComunitarioAlarmaComponent } from './lista-recurso-comunitario-alarma.component';

describe('ListaRecursoComunitarioAlarmaComponent', () => {
  let component: ListaRecursoComunitarioAlarmaComponent;
  let fixture: ComponentFixture<ListaRecursoComunitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecursoComunitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecursoComunitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
