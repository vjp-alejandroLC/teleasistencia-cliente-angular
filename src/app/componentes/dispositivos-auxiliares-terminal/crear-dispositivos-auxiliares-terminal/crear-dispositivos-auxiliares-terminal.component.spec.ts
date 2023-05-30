import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDispositivosAuxiliaresTerminalComponent } from './crear-dispositivos-auxiliares-terminal.component';

describe('CrearDispositivosAuxiliaresTerminalComponent', () => {
  let component: CrearDispositivosAuxiliaresTerminalComponent;
  let fixture: ComponentFixture<CrearDispositivosAuxiliaresTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDispositivosAuxiliaresTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDispositivosAuxiliaresTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
