import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRelacionUsuarioCentroComponent } from './crear-relacion-usuario-centro.component';

describe('CrearRelacionUsuarioCentroComponent', () => {
  let component: CrearRelacionUsuarioCentroComponent;
  let fixture: ComponentFixture<CrearRelacionUsuarioCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRelacionUsuarioCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRelacionUsuarioCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
