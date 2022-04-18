import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { MyCalcComponent } from './my-calc.component';

describe('MyCalcComponent', () => {
  let component: MyCalcComponent;
  let fixture: ComponentFixture<MyCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCalcComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
