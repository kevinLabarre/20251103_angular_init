import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../interfaces/INews';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) { }

  private newsUrl = "http://localhost:3000/actualites"

  addOneNews(news: INews): Observable<INews> {
    return this.http.post<INews>(this.newsUrl, news)
  }

  getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.newsUrl)
  }

}
