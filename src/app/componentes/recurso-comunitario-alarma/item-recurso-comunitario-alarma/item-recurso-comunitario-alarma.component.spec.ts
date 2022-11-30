import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecursoComunitarioAlarmaComponent } from './item-recurso-comunitario-alarma.component';

describe('ItemRecursoComunitarioAlarmaComponent', () => {
  let component: ItemRecursoComunitarioAlarmaComponent;
  let fixture: ComponentFixture<ItemRecursoComunitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRecursoComunitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRecursoComunitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
