import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../models/item';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Item[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getGames().subscribe(
      data => this.games = data
    )
  }

}
