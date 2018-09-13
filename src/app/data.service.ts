import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http: HttpClient) { 
    // this.items = this.afs.collection('items').valueChanges();
  }

  //gameUrl ="https://my-json-server.typicode.com/denchikUniversal/json-faker-directory/games/";
  gameUrl = "http://localhost:3000/games/";
  newsUrl = "http://localhost:3000/news/";


  getGames(){
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



