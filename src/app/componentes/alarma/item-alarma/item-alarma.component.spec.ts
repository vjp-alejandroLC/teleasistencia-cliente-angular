import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlarmaComponent } from './item-alarma.component';

describe('ItemAlarmaComponent', () => {
  let component: ItemAlarmaComponent;
  let fixture: ComponentFixture<ItemAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
