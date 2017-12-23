import { Component } from '@angular/core';
import { AppService } from './app.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  msg = '';
  constructor(private appService : AppService){}

  getMessage() : void{
    this.appService.getMessage().then(message => this.msg = message )
  }
  ngOnInit() : void {
    this.getMessage();
  }
}
