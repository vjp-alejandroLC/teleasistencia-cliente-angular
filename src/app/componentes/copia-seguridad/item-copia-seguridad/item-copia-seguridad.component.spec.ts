import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCopiaSeguridadComponent } from './item-copia-seguridad.component';

describe('ItemCopiaSeguridadComponent', () => {
  let component: ItemCopiaSeguridadComponent;
  let fixture: ComponentFixture<ItemCopiaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCopiaSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCopiaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
