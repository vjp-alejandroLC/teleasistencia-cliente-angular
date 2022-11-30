import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPersonaContactoAlarmaComponent } from './modificar-persona-contacto-alarma.component';

describe('ModificarPersonaContactoAlarmaComponent', () => {
  let component: ModificarPersonaContactoAlarmaComponent;
  let fixture: ComponentFixture<ModificarPersonaContactoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPersonaContactoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPersonaContactoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
