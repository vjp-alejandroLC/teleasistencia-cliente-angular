import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonaContactoAlarmaComponent } from './lista-persona-contacto-alarma.component';

describe('ListaPersonaContactoAlarmaComponent', () => {
  let component: ListaPersonaContactoAlarmaComponent;
  let fixture: ComponentFixture<ListaPersonaContactoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPersonaContactoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonaContactoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
