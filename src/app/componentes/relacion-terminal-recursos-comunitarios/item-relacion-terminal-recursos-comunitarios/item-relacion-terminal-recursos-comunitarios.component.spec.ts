import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRelacionTerminalRecursosComunitariosComponent } from './item-relacion-terminal-recursos-comunitarios.component';

describe('ItemRelacionTerminalRecursosComunitariosComponent', () => {
  let component: ItemRelacionTerminalRecursosComunitariosComponent;
  let fixture: ComponentFixture<ItemRelacionTerminalRecursosComunitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRelacionTerminalRecursosComunitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRelacionTerminalRecursosComunitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
