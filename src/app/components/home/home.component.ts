import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  msg = '';
  constructor(private homeService : HomeService){}


  getMessage() : void{
    this.homeService.getMessage().then(message => this.msg = message )
  }
  ngOnInit() : void {
    this.getMessage();
  }

}
