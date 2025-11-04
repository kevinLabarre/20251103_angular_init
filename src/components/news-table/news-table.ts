import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-table',
  imports: [DatePipe],
  templateUrl: './news-table.html',
  styleUrl: './news-table.css',
})
export class NewsTable {
  @Input({ required: true }) news!: INews[]
}
