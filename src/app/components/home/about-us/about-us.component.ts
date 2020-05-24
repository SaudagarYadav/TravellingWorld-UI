import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public instragramUrl;
  public facebookUrl;
  public whatsappUrl;
  constructor() { }

  ngOnInit() {
    jQuery("#mainBodyId").addClass("mainBody");
    
    this.instragramUrl = "https://www.instagram.com/saudagar_yadav/?hl=en";
    this.facebookUrl = "https://www.facebook.com/saudagar.yadav";
    this.whatsappUrl = "https://api.whatsapp.com/send?phone=919702467015=Welcome%20to%20my%20whatsapp";
  }

}
