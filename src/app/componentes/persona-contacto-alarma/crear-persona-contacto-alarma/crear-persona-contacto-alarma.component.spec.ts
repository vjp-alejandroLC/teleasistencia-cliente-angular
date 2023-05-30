import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonaContactoAlarmaComponent } from './crear-persona-contacto-alarma.component';

describe('CrearPersonaContactoAlarmaComponent', () => {
  let component: CrearPersonaContactoAlarmaComponent;
  let fixture: ComponentFixture<CrearPersonaContactoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonaContactoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaContactoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
