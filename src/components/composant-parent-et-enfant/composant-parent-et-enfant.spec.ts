import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantParentEtEnfant } from './composant-parent-et-enfant';

describe('ComposantParentEtEnfant', () => {
  let component: ComposantParentEtEnfant;
  let fixture: ComponentFixture<ComposantParentEtEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantParentEtEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantParentEtEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
