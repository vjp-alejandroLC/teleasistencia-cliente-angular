import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHistoricoAgendaComponent } from './modificar-historico-agenda.component';

describe('ModificarHistoricoAgendaComponent', () => {
  let component: ModificarHistoricoAgendaComponent;
  let fixture: ComponentFixture<ModificarHistoricoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHistoricoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHistoricoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
