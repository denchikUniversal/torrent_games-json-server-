import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>

  constructor(private http: HttpClient, public afs: AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges()
  }

  //gameUrl ="https://my-json-server.typicode.com/denchikUniversal/json-faker-directory/games/";
  // gameUrl = "http://localhost:3000/games/";
  // newsUrl = "http://localhost:3000/news/";


  getGames(){
    return this.items;
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


interface Item {
  id?: string;
  name?: string;
  developer?: string;
  type?: string;
  pill?: string;
  os?: string;
  processor?: string;
  ddr?: string;
  video?: string;
  hdd?: string;
  descr?: string;
  imgUrl?: string;
  ganre?: string;
}
