import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlarmaTerminalComponent } from './crear-alarma-terminal.component';

describe('CrearAlarmaTerminalComponent', () => {
  let component: CrearAlarmaTerminalComponent;
  let fixture: ComponentFixture<CrearAlarmaTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlarmaTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlarmaTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
