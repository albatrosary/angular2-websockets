import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WebsocketComponent } from './websocket/websocket.component';
import { LoginComponent } from './login/login.component';


@Component({
  moduleId: module.id,
  selector: 'angular-sample-app',
  template: `
  <h1>Component Router</h1>
  <a [routerLink]="['Login']">LoginComponent</a>
  <a [routerLink]="['WebSocket']">WebSocket Sample</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/app-login',     name: 'Login',     component: LoginComponent, useAsDefault: true},
  {path: '/app-websocket', name: 'WebSocket', component: WebsocketComponent}
])
export class AngularSampleAppComponent {}


