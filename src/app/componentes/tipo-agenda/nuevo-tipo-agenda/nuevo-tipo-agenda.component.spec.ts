import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoAgendaComponent } from './nuevo-tipo-agenda.component';

describe('NuevoTipoAgendaComponent', () => {
  let component: NuevoTipoAgendaComponent;
  let fixture: ComponentFixture<NuevoTipoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
