import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPersonaContactoAlarmaComponent } from './item-persona-contacto-alarma.component';

describe('ItemPersonaContactoAlarmaComponent', () => {
  let component: ItemPersonaContactoAlarmaComponent;
  let fixture: ComponentFixture<ItemPersonaContactoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPersonaContactoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPersonaContactoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
