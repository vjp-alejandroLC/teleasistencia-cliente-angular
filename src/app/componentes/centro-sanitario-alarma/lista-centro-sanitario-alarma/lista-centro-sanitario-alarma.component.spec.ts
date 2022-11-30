import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCentroSanitarioAlarmaComponent } from './lista-centro-sanitario-alarma.component';

describe('ListaCentroSanitarioAlarmaComponent', () => {
  let component: ListaCentroSanitarioAlarmaComponent;
  let fixture: ComponentFixture<ListaCentroSanitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCentroSanitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCentroSanitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
