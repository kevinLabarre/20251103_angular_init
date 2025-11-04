import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTable } from './news-table';

describe('NewsTable', () => {
  let component: NewsTable;
  let fixture: ComponentFixture<NewsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
