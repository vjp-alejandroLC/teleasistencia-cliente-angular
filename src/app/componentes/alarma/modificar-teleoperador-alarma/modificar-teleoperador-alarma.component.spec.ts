import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTeleoperadorAlarmaComponent } from './modificar-teleoperador-alarma.component';

describe('ModificarTeleoperadorAlarmaComponent', () => {
  let component: ModificarTeleoperadorAlarmaComponent;
  let fixture: ComponentFixture<ModificarTeleoperadorAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTeleoperadorAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTeleoperadorAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
