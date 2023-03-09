import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaQueryParamsComponent } from './actualiza-query-params.component';

describe('ActualizaQueryParamsComponent', () => {
  let component: ActualizaQueryParamsComponent;
  let fixture: ComponentFixture<ActualizaQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaQueryParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
