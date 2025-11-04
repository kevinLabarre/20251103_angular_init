import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { NewsCard } from "../news-card/news-card";

@Component({
  selector: 'app-composant-pipe-async',
  imports: [AsyncPipe, NewsCard],
  templateUrl: './composant-pipe-async.html',
  styleUrl: './composant-pipe-async.css',
})
export class ComposantPipeAsync {

  constructor(private http: HttpClient) {
    this.news$ = this.loadData()
    this.actu$ = this.loadOneNews()
  }

  // Par convention, les observables terminent par un '$'
  news$: Observable<INews[]>

  loadData(): Observable<INews[]> {
    return this.http.get<INews[]>("http://localhost:3000/actualites")
  }

  // Pour charger une seule actualité
  actu$: Observable<INews>
  loadOneNews(): Observable<INews> {
    return this.http.get<INews>("http://localhost:3000/actualites/1")
  }

}
