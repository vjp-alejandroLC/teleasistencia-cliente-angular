import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAgendaComponent } from './nuevo-agenda.component';

describe('NuevoAgendaComponent', () => {
  let component: NuevoAgendaComponent;
  let fixture: ComponentFixture<NuevoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
