import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCopiaSeguridadComponent } from './lista-copia-seguridad.component';

describe('ListaCopiaSeguridadComponent', () => {
  let component: ListaCopiaSeguridadComponent;
  let fixture: ComponentFixture<ListaCopiaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCopiaSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCopiaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
