import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-news-table',
  imports: [],
  templateUrl: './news-table.html',
  styleUrl: './news-table.css',
})
export class NewsTable {
  @Input({ required: true }) news!: INews[]
}
