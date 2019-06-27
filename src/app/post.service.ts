import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  topicID: number;
  threadID: number;
  articleID: number;
  userID: number;

  threadtitle: String;
  isLogged:boolean = false;
  username:String;

  GetArticle() {
    return this.http.get<Article[]>("http://localhost:3000/getarticles")
  }

  GetArticlecontent(id) {
    return this.http.get<Article>(`http://localhost:3000/getarticle/${id}`)
  }

  GetTopic() {
    return this.http.get<Topic[]>("http://localhost:3000/gettopics")
  }

  Getthread(thread) {
    return this.http.get<Thread[]>(`http://localhost:3000/getthreads/${thread}`)
  }

  Getpost(threadid, topicid) {
    return this.http.get<Post[]>(`http://localhost:3000/getposts/${threadid}/${topicid}`)
  }

  Passuser(user) {
    this.username = user;
  }

  Passuserid(userid) {
    this.userID = userid;
  }

  Getuser() {
    return this.username;
  }

  /*Getuser(u) {
    return this.http.get<String[]>(`http://localhost:3000/getuser/${u}`)
  }*/

  Getuserid() {
    return this.userID;
  }

  GetThreadtitle(){
    return this.threadtitle;
  }

  Changeloginstatus(stat){
    this.isLogged = stat
  }

  Getloginstatus(){
    return this.isLogged
  }

  Addpost(post, threadid, topicid, userid) {
    return this.http.post<Post[]>(`http://localhost:3000/post`,{"content": post,"threadid": threadid,"topicid": topicid,"userid": userid}).subscribe((data) =>{console.log(data)})
  }

  Addthread(thread, topicid) {
    return this.http.post<Post[]>(`http://localhost:3000/postthread`,{"title": thread,"topicid": topicid}).subscribe((data) =>{console.log(data)})
  }

  Posttopicid(id){
    this.topicID = id;
  }

  Postthreadid(id){
    this.threadID = id;
  }

  Postarticleid(id){
    this.articleID = id;
  }

  Gettopicid(){
    return this.topicID;
  }

  Getthreadid(){
    return this.threadID;
  }

  Getarticleid(){
    return this.articleID;
  }

  PostLogin(username,password){
    console.log("Username:" +username);
    console.log("Password:" +password);
    
     return this.http.post<boolean>("http://localhost:3001/auth",{"username":username,"password":password});
    
    };


  constructor( private http: HttpClient) {}
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface Topic {
  id: number;
  title: string;
}

export interface Thread {
  id: number;
  title: string;
  topicid: number;
}

export interface Post {
  id: number;
  content: String;
  threadid: number;
  userid: number;
  timestamp: String;
}
