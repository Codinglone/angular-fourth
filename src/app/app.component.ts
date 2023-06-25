import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-fourth';
  message: string = ''

  @ViewChild(UserComponent) fromChild !: UserComponent

  ngAfterViewInit(): void {
   this.message = this.fromChild.childMessage
    
  }

  constructor(){

  }
}
