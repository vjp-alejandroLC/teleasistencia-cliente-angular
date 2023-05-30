import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHistoricoAgendaComponent } from './nuevo-historico-agenda.component';

describe('NuevoHistoricoAgendaComponent', () => {
  let component: NuevoHistoricoAgendaComponent;
  let fixture: ComponentFixture<NuevoHistoricoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoHistoricoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHistoricoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
