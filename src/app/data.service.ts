import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Item } from './models/item';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges()
  }

  //gameUrl ="https://my-json-server.typicode.com/denchikUniversal/json-faker-directory/games/";
  // gameUrl = "http://localhost:3000/games/";
  // newsUrl = "http://localhost:3000/news/";


  // getGames(){
  //   return this.http.get(this.gameUrl);
  // }
  getGames() {
    return this.items;
  }

  // getGame(gameId): Observable<Object> {
  //   return this.http.get(this.gameUrl + gameId);
  // }

  getGame(gameId) {
    return (this.items + '/' + gameId);
  }

  // getNews(): Observable<Object> {
  //   return this.http.get(this.newsUrl);
  // }

  // getNew(newsId): Observable<Object> {
  //   return this.http.get(this.newsUrl + newsId);
  // }
}



