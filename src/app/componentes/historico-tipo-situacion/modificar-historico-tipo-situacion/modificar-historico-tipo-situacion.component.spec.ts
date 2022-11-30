import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHistoricoTipoSituacionComponent } from './modificar-historico-tipo-situacion.component';

describe('ModificarHistoricoTipoSituacionComponent', () => {
  let component: ModificarHistoricoTipoSituacionComponent;
  let fixture: ComponentFixture<ModificarHistoricoTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHistoricoTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHistoricoTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
