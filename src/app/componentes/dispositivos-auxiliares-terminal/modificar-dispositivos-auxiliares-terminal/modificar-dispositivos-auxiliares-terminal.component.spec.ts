import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDispositivosAuxiliaresTerminalComponent } from './modificar-dispositivos-auxiliares-terminal.component';

describe('ModificarDispositivosAuxiliaresTerminalComponent', () => {
  let component: ModificarDispositivosAuxiliaresTerminalComponent;
  let fixture: ComponentFixture<ModificarDispositivosAuxiliaresTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDispositivosAuxiliaresTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDispositivosAuxiliaresTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
