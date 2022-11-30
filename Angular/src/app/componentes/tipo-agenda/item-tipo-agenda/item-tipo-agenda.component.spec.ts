import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoAgendaComponent } from './item-tipo-agenda.component';

describe('ItemTipoAgendaComponent', () => {
  let component: ItemTipoAgendaComponent;
  let fixture: ComponentFixture<ItemTipoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
