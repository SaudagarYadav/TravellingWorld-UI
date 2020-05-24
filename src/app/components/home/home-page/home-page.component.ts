import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { NgwWowService } from 'ngx-wow';
import { ScrollSpyModule } from 'ngx-scrollspy';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private wowService: NgwWowService) { 
    this.wowService.init();
  }

  ngOnInit() {
  }



}
