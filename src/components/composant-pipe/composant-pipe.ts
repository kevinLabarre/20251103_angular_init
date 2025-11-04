import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-composant-pipe',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './composant-pipe.html',
  styleUrl: './composant-pipe.css',
})
export class ComposantPipe {

  myDate = "2023-10-15"
  myDate2 = "2025-07-04T12:42:10.600Z"

  money = 1000.50
}
