import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { ForumComponent } from './forum/forum.component';
import { GuideComponent } from './guide/guide.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import {RouterModule} from '@angular/router';
import { NewsComponent } from './news/news.component';
import { PlaynowComponent } from './playnow/playnow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageslideComponent } from './imageslide/imageslide.component';
import { LoginComponent } from './login/login.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
import { LoginformComponent } from './loginform/loginform.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ForumpostComponent } from './forumpost/forumpost.component';
import { PostService } from './post.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForumsubmitComponent } from './forumsubmit/forumsubmit.component';
import { HttpClientModule } from '@angular/common/http';
import { ForumtopicComponent } from './forumtopic/forumtopic.component';
import { ForumpostlistComponent } from './forumpostlist/forumpostlist.component';
import { ArticleComponent } from './article/article.component';
import { ThreadsubmitComponent } from './threadsubmit/threadsubmit.component';
import { AdventureLogComponent } from './adventure-log/adventure-log.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    FeaturesComponent,
    ForumComponent,
    GuideComponent,
    LoginbarComponent,
    NewsComponent,
    PlaynowComponent,
    PagenotfoundComponent,
    ImageslideComponent,
    LoginComponent,
    ArticlecardComponent,
    LoginformComponent,
    ForumpostComponent,
    ForumsubmitComponent,
    ForumtopicComponent,
    ForumpostlistComponent,
    ArticleComponent,
    ThreadsubmitComponent,
    AdventureLogComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "News", component: NewsComponent,
        children: [
        {path: "Articlecard", component: ArticlecardComponent},
        {path: "Article", component: ArticleComponent},
        { path: "**", component: ArticlecardComponent}
      ]},
      { path: "AdvLog", component: AdventureLogComponent},
      { path: "Forum", component: ForumComponent, 
        children: [
          {path: "Topic", component: ForumtopicComponent},
          {path: "Postlist", component: ForumpostlistComponent},
          {path: "Post", component: ForumpostComponent},
          { path: "**", component: ForumtopicComponent}
        ]},
      { path: "Features", component: FeaturesComponent},
      { path: "Playnow", component: PlaynowComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", component: PagenotfoundComponent}
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
