import { Component, OnInit } from '@angular/core';
import { PostService, Post, Thread } from '../post.service';

@Component({
  selector: 'app-forumpost',
  templateUrl: './forumpost.component.html',
  styleUrls: ['./forumpost.component.scss']
})
export class ForumpostComponent implements OnInit {
  posts: Post[];
  thread: String;

  constructor(private Service : PostService) { } 

  ngOnInit() {
    this.thread = this.Service.GetThreadtitle()

    this.Service.Getpost(this.Service.Getthreadid(), this.Service.Gettopicid()).subscribe(post => {
      this.posts = post;
    })
  }
}