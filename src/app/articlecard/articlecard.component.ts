import { Component, OnInit } from '@angular/core';
import { Article, PostService } from '../post.service';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.scss']
})
export class ArticlecardComponent implements OnInit {
  article: Article[];

  constructor(private Service : PostService) { }

  gotoarticle(id){
    this.Service.Postarticleid(id + 1);
  }

  ngOnInit() {
    this.Service.GetArticle().subscribe(a => {
      this.article = a;
    })
  }
}
