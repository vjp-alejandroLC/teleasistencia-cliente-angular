import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlarmaUcrComponent } from './crear-alarma-ucr.component';

describe('CrearAlarmaComponent', () => {
  let component: CrearAlarmaUcrComponent;
  let fixture: ComponentFixture<CrearAlarmaUcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlarmaUcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlarmaUcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
