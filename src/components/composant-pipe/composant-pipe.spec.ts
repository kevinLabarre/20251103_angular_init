import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPipe } from './composant-pipe';

describe('ComposantPipe', () => {
  let component: ComposantPipe;
  let fixture: ComponentFixture<ComposantPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
