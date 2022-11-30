import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRelacionUsuarioCentroComponent } from './modificar-relacion-usuario-centro.component';

describe('ModificarRelacionUsuarioCentroComponent', () => {
  let component: ModificarRelacionUsuarioCentroComponent;
  let fixture: ComponentFixture<ModificarRelacionUsuarioCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRelacionUsuarioCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRelacionUsuarioCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
