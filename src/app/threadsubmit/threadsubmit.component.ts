import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-threadsubmit',
  templateUrl: './threadsubmit.component.html',
  styleUrls: ['./threadsubmit.component.scss']
})
export class ThreadsubmitComponent implements OnInit {
  private postobj : any = {"title": ""};

  post: Post;

  constructor(private Service : PostService) { }

  addthread(){
    this.Service.Addthread(this.Service.Gettopicid(), this.postobj);
    console.log(this.Service.Getthreadid())
  }

  ngOnInit() {
  }
}
