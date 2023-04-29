import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosComunitariosComponent } from './recursos-comunitarios.component';

describe('RecursosComunitariosComponent', () => {
  let component: RecursosComunitariosComponent;
  let fixture: ComponentFixture<RecursosComunitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosComunitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosComunitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
