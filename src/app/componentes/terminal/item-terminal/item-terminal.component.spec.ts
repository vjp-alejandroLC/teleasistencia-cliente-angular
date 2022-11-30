import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTerminalComponent } from './item-terminal.component';

describe('ItemTerminalComponent', () => {
  let component: ItemTerminalComponent;
  let fixture: ComponentFixture<ItemTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
