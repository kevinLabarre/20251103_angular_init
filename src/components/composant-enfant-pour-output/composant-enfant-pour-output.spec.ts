import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantEnfantPourOutput } from './composant-enfant-pour-output';

describe('ComposantEnfantPourOutput', () => {
  let component: ComposantEnfantPourOutput;
  let fixture: ComponentFixture<ComposantEnfantPourOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantEnfantPourOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantEnfantPourOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
