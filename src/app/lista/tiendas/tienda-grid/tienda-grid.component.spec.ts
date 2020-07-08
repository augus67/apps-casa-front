import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaGridComponent } from './tienda-grid.component';

describe('TiendaGridComponent', () => {
  let component: TiendaGridComponent;
  let fixture: ComponentFixture<TiendaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
