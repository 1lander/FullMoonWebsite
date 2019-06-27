import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';

@Component({
  selector: 'app-adventure-log',
  templateUrl: './adventure-log.component.html',
  styleUrls: ['./adventure-log.component.scss']
})
export class AdventureLogComponent implements OnInit {

  constructor(private modalService: NgbModal,private service:PostService) { }



  ngOnInit() {

    this.CallProfile();

  }

  CallProfile(){
    this.service.Getloginstatus()
  }

}
