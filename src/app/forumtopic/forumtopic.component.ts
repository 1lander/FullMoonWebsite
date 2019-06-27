import { Component, OnInit } from '@angular/core';
import { PostService, Topic } from '../post.service';

@Component({
  selector: 'app-forumtopic',
  templateUrl: './forumtopic.component.html',
  styleUrls: ['./forumtopic.component.scss']
})
export class ForumtopicComponent implements OnInit {
  topics: Topic[];

  constructor(private Service : PostService) { }

  passid(id){
    this.Service.Posttopicid(id + 1);
  }

  ngOnInit() {
    this.Service.GetTopic().subscribe(res => {
      this.topics = res;
    })
  }
}
