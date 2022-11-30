import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoAgendaComponent } from './detalles-tipo-agenda.component';

describe('DetallesTipoAgendaComponent', () => {
  let component: DetallesTipoAgendaComponent;
  let fixture: ComponentFixture<DetallesTipoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
