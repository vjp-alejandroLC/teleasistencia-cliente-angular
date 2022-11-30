import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCentroSanitarioAlarmaComponent } from './modificar-centro-sanitario-alarma.component';

describe('ModificarCentroSanitarioAlarmaComponent', () => {
  let component: ModificarCentroSanitarioAlarmaComponent;
  let fixture: ComponentFixture<ModificarCentroSanitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCentroSanitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCentroSanitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
