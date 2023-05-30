import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRelacionUsuarioCentroComponent } from './item-relacion-usuario-centro.component';

describe('ItemRelacionUsuarioCentroComponent', () => {
  let component: ItemRelacionUsuarioCentroComponent;
  let fixture: ComponentFixture<ItemRelacionUsuarioCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRelacionUsuarioCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRelacionUsuarioCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
