import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1>longin</h1>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <div ngControlGroup="credentials">
      <p>Login: <input type="text" ngControl="login"></p>
      <p>Password: <input type="password" ngControl="password"></p>
    </div>
    <button type="submit">Submit Form</button>
  </form>
  {{data}}
  `
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
  data: string;
  
  onSubmit(data) {
    this.data = JSON.stringify(data, null, 2);
  }
}
