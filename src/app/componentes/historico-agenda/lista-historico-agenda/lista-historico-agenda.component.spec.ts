import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistoricoAgendaComponent } from './lista-historico-agenda.component';

describe('ListaHistoricoAgendaComponent', () => {
  let component: ListaHistoricoAgendaComponent;
  let fixture: ComponentFixture<ListaHistoricoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHistoricoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHistoricoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
