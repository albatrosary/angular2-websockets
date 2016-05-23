import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'app-login',
  template: `
  <h1>longin</h1>
  <div>{{error}}</div>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <p>Login: <input type="text" ngControl="login"></p>
    <p>Password: <input type="password" ngControl="password"></p>
    <button type="submit">Submit Form</button>
  </form>
  {{data}}
  `,
  providers: [LoginService, HTTP_PROVIDERS]
})
export class LoginComponent implements OnInit {

  loginService: LoginService;
  error: string;
  
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
      .then(response => this.data = response._body)
      .catch(error => this.error = 'エラーが発生しました');
  }
}
