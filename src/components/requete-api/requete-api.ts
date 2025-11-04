import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';
import { NewsTable } from "../news-table/news-table";
import { NewsCard } from "../news-card/news-card";

@Component({
  selector: 'app-requete-api',
  imports: [NewsTable, NewsCard],
  templateUrl: './requete-api.html',
  styleUrl: './requete-api.css',
})
export class RequeteApi {
  constructor(private http: HttpClient) {
    this.loadData();
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

}
