import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getNews().subscribe(
      data => this.news = data
    )
  }

}
