import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionUsuarioCentroComponent } from './lista-relacion-usuario-centro.component';

describe('ListaRelacionUsuarioCentroComponent', () => {
  let component: ListaRelacionUsuarioCentroComponent;
  let fixture: ComponentFixture<ListaRelacionUsuarioCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRelacionUsuarioCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionUsuarioCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
