import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPacienteComponent } from './item-paciente.component';

describe('ItemPacienteComponent', () => {
  let component: ItemPacienteComponent;
  let fixture: ComponentFixture<ItemPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
