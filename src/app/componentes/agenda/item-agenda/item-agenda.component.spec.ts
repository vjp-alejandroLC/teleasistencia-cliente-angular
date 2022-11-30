import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAgendaComponent } from './item-agenda.component';

describe('ItemAgendaComponent', () => {
  let component: ItemAgendaComponent;
  let fixture: ComponentFixture<ItemAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
