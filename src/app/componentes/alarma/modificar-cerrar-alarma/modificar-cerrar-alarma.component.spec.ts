import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCerrarAlarmaComponent } from './modificar-cerrar-alarma.component';

describe('ModificarAlarmaComponent', () => {
  let component: ModificarCerrarAlarmaComponent;
  let fixture: ComponentFixture<ModificarCerrarAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCerrarAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCerrarAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
