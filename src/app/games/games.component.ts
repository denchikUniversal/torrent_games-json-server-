import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getGames().subscribe(
      data => this.games = data
    )
  }

}
