import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTerminalComponent } from './crear-terminal.component';

describe('CrearTerminalComponent', () => {
  let component: CrearTerminalComponent;
  let fixture: ComponentFixture<CrearTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
