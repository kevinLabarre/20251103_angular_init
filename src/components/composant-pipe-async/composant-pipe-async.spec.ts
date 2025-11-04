import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPipeAsync } from './composant-pipe-async';

describe('ComposantPipeAsync', () => {
  let component: ComposantPipeAsync;
  let fixture: ComponentFixture<ComposantPipeAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantPipeAsync]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantPipeAsync);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
