import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoTipoSituacionComponent } from './historico-tipo-situacion.component';

describe('HistoricoTipoSituacionComponent', () => {
  let component: HistoricoTipoSituacionComponent;
  let fixture: ComponentFixture<HistoricoTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
