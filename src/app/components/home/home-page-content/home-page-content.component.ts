import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
@Component({
  selector: 'home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery("#mainBodyId").removeClass("mainBody");
  }

}
