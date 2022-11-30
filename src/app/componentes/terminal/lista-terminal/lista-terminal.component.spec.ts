import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTerminalComponent } from './lista-terminal.component';

describe('ListaTerminalComponent', () => {
  let component: ListaTerminalComponent;
  let fixture: ComponentFixture<ListaTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
