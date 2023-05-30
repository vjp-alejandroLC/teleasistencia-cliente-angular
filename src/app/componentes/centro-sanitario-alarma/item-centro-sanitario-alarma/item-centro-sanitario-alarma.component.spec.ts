import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCentroSanitarioAlarmaComponent } from './item-centro-sanitario-alarma.component';

describe('ItemCentroSanitarioAlarmaComponent', () => {
  let component: ItemCentroSanitarioAlarmaComponent;
  let fixture: ComponentFixture<ItemCentroSanitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCentroSanitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCentroSanitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
