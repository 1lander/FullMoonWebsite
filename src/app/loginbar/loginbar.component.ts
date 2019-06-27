import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { timer, Observable, Subject, of } from 'rxjs';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.scss']
})
export class LoginbarComponent implements OnInit,OnDestroy {
  logg='';
  constructor(private modalService: NgbModal,private service:PostService, private ref:ChangeDetectorRef) {}
  ngOnInit() {}
  ngOnDestroy(){}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    });
  }

  isLogged:boolean = false;
  

  private obj : any  = {"Email": "", "pass" : "", "id" : ""};
  
  onCredSubmit(){
    this.service.PostLogin(this.obj.Email,this.obj.pass).subscribe(result => 
      {
          console.log(result == true ? "ingelogd": "niet juist")
          this.isLogged = result;
          this.service.Changeloginstatus(result);
          this.service.Passuser(this.obj.Email);
          this.service.Passuserid(this.obj.id);
          if(result){
            this.modalService.dismissAll();
            console.log("better reload");
          }
      });

      
      
  }

  private LogOut(){
    this.isLogged = false;
    this.service.Changeloginstatus(false);
  }

  amILogged(){
    console.log(this.isLogged);
  }



}
