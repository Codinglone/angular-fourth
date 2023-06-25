import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = "Chuzzi"
  childMessage: string = "Hello Parent"
  outputChildMessage: string = "Hello from Output child Message"

  fromChildViaEvents: string = ''
  @Output() messageEvent = new EventEmitter<string>()

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }

  receiveMessage(event: any) {
    this.fromChildViaEvents = event
  }
}
