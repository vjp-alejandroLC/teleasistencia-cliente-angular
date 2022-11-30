import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHistoricoTipoSituacionComponent } from './crear-historico-tipo-situacion.component';

describe('CrearHistoricoTipoSituacionComponent', () => {
  let component: CrearHistoricoTipoSituacionComponent;
  let fixture: ComponentFixture<CrearHistoricoTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHistoricoTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHistoricoTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
