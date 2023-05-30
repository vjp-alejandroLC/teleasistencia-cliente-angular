import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCopiaSeguridadComponent } from './crear-copia-seguridad.component';

describe('CrearCopiaSeguridadComponent', () => {
  let component: CrearCopiaSeguridadComponent;
  let fixture: ComponentFixture<CrearCopiaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCopiaSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCopiaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
