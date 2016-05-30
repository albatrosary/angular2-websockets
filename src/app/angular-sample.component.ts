import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WebsocketComponent } from './websocket/websocket.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';


@Component({
  moduleId: module.id,
  selector: 'angular-sample-app',
  template: `
  <h1>オークション</h1>
  <menu>
  <a [routerLink]="['Login']">login</a>
  <a [routerLink]="['Items']">List</a>
  <a [routerLink]="['WebSocket']">WebSocket</a>
  </menu>
  <router-outlet></router-outlet>
  `,
  styles:[`
  h1 {
    font-size: 20px;
    text-align: center;
  }
  menu {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  a {
    display: inline-block;
    outline: none;
    padding: 9px 5px;
    margin: 0px 20px;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    color: #202020;
  }
  a.router-link-active {
    border-bottom: 2px solid #444444;
  }
  `],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/app-login',     name: 'Login',     component: LoginComponent, useAsDefault: true},
  {path: '/app-websocket', name: 'WebSocket', component: WebsocketComponent},
  {path: '/app-items',     name: 'Items',     component: ItemsComponent}
])
export class AngularSampleAppComponent {}


