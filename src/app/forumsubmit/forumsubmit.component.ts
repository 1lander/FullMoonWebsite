import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-forumsubmit',
  templateUrl: './forumsubmit.component.html',
  styleUrls: ['./forumsubmit.component.scss']
})
export class ForumsubmitComponent implements OnInit {
  private postobj : any = {"content": ""};

  post: Post;

  constructor(private Service : PostService) { }

  addpost(){
    this.Service.Addpost(this.postobj,this.Service.Getthreadid(),this.Service.Gettopicid(),1);
    console.log(this.Service.Getthreadid())
  }

  ngOnInit() {
  }

}
