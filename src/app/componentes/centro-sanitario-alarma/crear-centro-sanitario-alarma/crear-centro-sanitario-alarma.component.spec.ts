import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCentroSanitarioAlarmaComponent } from './crear-centro-sanitario-alarma.component';

describe('CrearCentroSanitarioAlarmaComponent', () => {
  let component: CrearCentroSanitarioAlarmaComponent;
  let fixture: ComponentFixture<CrearCentroSanitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCentroSanitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCentroSanitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
