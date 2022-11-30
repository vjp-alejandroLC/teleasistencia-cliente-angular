import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRelacionPacientePersonaComponent } from './item-relacion-paciente-persona.component';

describe('ItemRelacionPacientePersonaComponent', () => {
  let component: ItemRelacionPacientePersonaComponent;
  let fixture: ComponentFixture<ItemRelacionPacientePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRelacionPacientePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRelacionPacientePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
