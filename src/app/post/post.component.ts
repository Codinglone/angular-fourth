import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postOutputMessage: string = 'You clicked to view post message'
  @Output() messageEvent = new EventEmitter<string>()

  sendMessage(): void {
    this.messageEvent.emit(this.postOutputMessage)
  }
}
