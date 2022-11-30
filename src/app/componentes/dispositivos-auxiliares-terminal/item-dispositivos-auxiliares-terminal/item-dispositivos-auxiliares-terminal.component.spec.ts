import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDispositivosAuxiliaresTerminalComponent } from './item-dispositivos-auxiliares-terminal.component';

describe('ItemDispositivosAuxiliaresTerminalComponent', () => {
  let component: ItemDispositivosAuxiliaresTerminalComponent;
  let fixture: ComponentFixture<ItemDispositivosAuxiliaresTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDispositivosAuxiliaresTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDispositivosAuxiliaresTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
