import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websocket',
  template: `
    <h2>The Angular2 Chat!</h2>
    <div>
      <span class="label">Your name</span>
      <input #name placeholder="Your name" />
    </div>
    <div>
      <span class="label">Message</span>
      <input [(ngModel)]="message" placeholder="Message" />
      <button (click)="sendMessage(name.value)">Send</button>
    </div>
    <ul>
      <li *ngFor="let message of messages">{{ message }}</li>
    </ul>
  `
})
export class WebsocketComponent {

  private messages = []
  private message = '';
  private ws: any;

  constructor() {
    const BASE_URL = 'ws://localhost:8888';

    this.ws = new WebSocket(BASE_URL);

    this.ws.onerror   = (evt) => console.log(evt);
    this.ws.onmessage = (evt) => this.messages.unshift(evt.data);
    this.ws.onclose   = (evt) => console.log("** Closed **");
    this.ws.onopen    = (evt) => console.log("** Openned ***");
  }
  
  sendMessage = (name) => {
    this.ws.send(`${ name }: ${ this.message }`);
    this.message = '';
  }
}
