import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game: Item[];

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.game = params.id
    })
   }

  ngOnInit() {
    // fetch('https://api.myjson.com/bins/141g8c')
    //   .then(data => data.json())
    //   .then(json => console.log(json));

      this.data.getGame(this.game).subscribe( data => this.game = data );
  }

}
