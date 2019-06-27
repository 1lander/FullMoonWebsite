import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-imageslide',
  templateUrl: './imageslide.component.html',
  styleUrls: ['./imageslide.component.scss']
})
export class ImageslideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

imgURL1:string = "https://i.imgur.com/LiWKhFt.png";
imgURL2:string = "http://3.bp.blogspot.com/-faYsB2ei7gY/TpRDOmcD4EI/AAAAAAAAAEU/ZKxpfLfBxAE/s1600/roman+mercenary.jpg";
imgURL3:string = "https://imgur.com/qPH02UK.png";
imgURL4:string = "";
imgURL5:string = "";
}
