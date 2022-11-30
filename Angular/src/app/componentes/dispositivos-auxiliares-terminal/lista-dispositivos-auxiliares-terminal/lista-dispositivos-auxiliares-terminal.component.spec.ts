import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDispositivosAuxiliaresTerminalComponent } from './lista-dispositivos-auxiliares-terminal.component';

describe('ListaDispositivosAuxiliaresTerminalComponent', () => {
  let component: ListaDispositivosAuxiliaresTerminalComponent;
  let fixture: ComponentFixture<ListaDispositivosAuxiliaresTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDispositivosAuxiliaresTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDispositivosAuxiliaresTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
