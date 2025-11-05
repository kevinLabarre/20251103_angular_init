import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';
import { NewsTable } from "../news-table/news-table";
import { NewsCard } from "../news-card/news-card";
import { ComposantPipeAsync } from "../composant-pipe-async/composant-pipe-async";
import { JsonPipe } from '@angular/common';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-requete-api',
  imports: [NewsTable, NewsCard, ComposantPipeAsync, JsonPipe],
  templateUrl: './requete-api.html',
  styleUrl: './requete-api.css',
})
export class RequeteApi {
  constructor(private http: HttpClient, private newsService: NewsService) {
    // this.loadData();
    this.loadDataWithService();
  }

  news: INews[] = [];

  loadData(): void {
    this.http.get<INews[]>("http://localhost:3000/actualites").subscribe({
      next: (resp) => {
        console.log(resp)
        this.news = resp
      },
      error: (err) => console.error(err),
      complete: () => console.log("Chargement terminé")
    })
  }

  loadDataWithService(): void {
    this.newsService.getAllNews().subscribe({
      next: (resp) => {
        console.log(resp)
        this.news = resp
      },
      error: (err) => console.error(err),
      complete: () => console.log("Chargement terminé")
    })
  }

}
