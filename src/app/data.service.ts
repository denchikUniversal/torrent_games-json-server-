import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //gameUrl ="https://my-json-server.typicode.com/denchikUniversal/json-faker-directory/games/";
  gameUrl = "http://localhost:3000/games/";
  newsUrl = "http://localhost:3000/news/";


  getGames(): Observable<Object>{
    return this.http.get(this.gameUrl);
  }

  getGame(gameId): Observable<Object> {
    return this.http.get(this.gameUrl + gameId);
  }

  getNews(): Observable<Object> {
    return this.http.get(this.newsUrl);
  }

  getNew(newsId): Observable<Object> {
    return this.http.get(this.newsUrl + newsId);
  }
}
