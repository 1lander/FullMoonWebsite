import { Component, OnInit } from '@angular/core';
import { Article, PostService } from '../post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  
  constructor(private Service : PostService) { }

  ngOnInit() {
    this.Service.GetArticlecontent(this.Service.Getarticleid()).subscribe(a => {
      this.article = a;
      console.log(this.article);
    })
  }

}
