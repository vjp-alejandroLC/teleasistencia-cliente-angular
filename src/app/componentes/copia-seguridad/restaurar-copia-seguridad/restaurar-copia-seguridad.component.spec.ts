import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurarCopiaSeguridadComponent } from './restaurar-copia-seguridad.component';

describe('RestaurarCopiaSeguridadComponent', () => {
  let component: RestaurarCopiaSeguridadComponent;
  let fixture: ComponentFixture<RestaurarCopiaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurarCopiaSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurarCopiaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
