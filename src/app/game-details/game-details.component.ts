import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.game = parseInt(params.id)
    })
   }

  ngOnInit() {
    // fetch('https://api.myjson.com/bins/141g8c')
    //   .then(data => data.json())
    //   .then(json => console.log(json));

      this.data.getGame(this.game).subscribe( data => this.game = data );
  }

}
