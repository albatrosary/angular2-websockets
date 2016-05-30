import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'app-login',
  template: `
  <h1>login</h1>
  <div>{{error}}</div>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <p>
      <input type="text" ngControl="login">
      <label>Your login id</label>
    </p>
    <p><input type="password" ngControl="password" placeholder="Password"></p>
    <button type="submit">Submit Form</button>
  </form>
  {{name}}
  `,
  styles: [`
  input {
  }
  `],
  providers: [LoginService, HTTP_PROVIDERS]
})
export class LoginComponent implements OnInit {

  loginService: LoginService;
  error: string;
  name: string
  
  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  ngOnInit() {
  }
  
  data: any;
  
  onSubmit(data) {
    this.error = '';
    this.loginService
      .post(data)
      .then(response => this.name = JSON.parse(response._body).name )
      .catch(error => this.error = 'エラーが発生しました');
  }
}
