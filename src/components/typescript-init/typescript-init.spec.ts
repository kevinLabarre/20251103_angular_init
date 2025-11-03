import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptInit } from './typescript-init';

describe('TypescriptInit', () => {
  let component: TypescriptInit;
  let fixture: ComponentFixture<TypescriptInit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptInit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptInit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
