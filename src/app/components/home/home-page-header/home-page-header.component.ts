import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent implements OnInit {
  
  public instragramUrl;
  public facebookUrl;
  public whatsappUrl;
  constructor(private wowService: NgwWowService) { 
    this.wowService.init();
  }

  ngOnInit() {
    this.instragramUrl = "https://www.instagram.com/saudagar_yadav/?hl=en";
    this.facebookUrl = "https://www.facebook.com/saudagar.yadav";
    this.whatsappUrl = "https://api.whatsapp.com/send?phone=919702467015=Welcome%20to%20my%20whatsapp";
  }

  public openLoginForm(){
   
  }
}

