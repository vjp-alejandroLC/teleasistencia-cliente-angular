import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTerminalComponent } from './modificar-terminal.component';

describe('ModificarTerminalComponent', () => {
  let component: ModificarTerminalComponent;
  let fixture: ComponentFixture<ModificarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
