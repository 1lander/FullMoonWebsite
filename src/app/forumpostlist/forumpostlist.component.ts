import { Component, OnInit } from '@angular/core';
import { PostService, Thread, Topic } from '../post.service';

@Component({
  selector: 'app-forumpostlist',
  templateUrl: './forumpostlist.component.html',
  styleUrls: ['./forumpostlist.component.scss']
})
export class ForumpostlistComponent implements OnInit {
  threads: Thread[];
  title: String;

  constructor(private Service : PostService) { }

  passid(id){
    this.Service.Postthreadid(id + 1);
  }

  gettitle(t){
    this.Service.threadtitle = t;
  }
  
  ngOnInit() {
    this.Service.Getthread(this.Service.Gettopicid()).subscribe(thread => {
      this.threads = thread;
    })
  }
}
