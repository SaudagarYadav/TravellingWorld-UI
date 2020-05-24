import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  public url = "https://kailashrath.com/tour/hamta-pass-chandrataal-trek/";
  constructor() { }

  ngOnInit() {
  }

}
