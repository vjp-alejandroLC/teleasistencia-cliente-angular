import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHistoricoTipoSituacionComponent } from './item-historico-tipo-situacion.component';

describe('ItemHistoricoTipoSituacionComponent', () => {
  let component: ItemHistoricoTipoSituacionComponent;
  let fixture: ComponentFixture<ItemHistoricoTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHistoricoTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHistoricoTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
