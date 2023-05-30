import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHistoricoAgendaComponent } from './item-historico-agenda.component';

describe('ItemHistoricoAgendaComponent', () => {
  let component: ItemHistoricoAgendaComponent;
  let fixture: ComponentFixture<ItemHistoricoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHistoricoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHistoricoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
