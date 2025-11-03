import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindDesPropsEtDesEvenements } from './bind-des-props-et-des-evenements';

describe('BindDesPropsEtDesEvenements', () => {
  let component: BindDesPropsEtDesEvenements;
  let fixture: ComponentFixture<BindDesPropsEtDesEvenements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindDesPropsEtDesEvenements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindDesPropsEtDesEvenements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
