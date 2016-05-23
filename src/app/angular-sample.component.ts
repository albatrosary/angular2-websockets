import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WebsocketComponent } from './websocket/websocket.component'


@Component({
  moduleId: module.id,
  selector: 'angular-sample-app',
  template: `
  <h1>Component Router</h1>
  <a [routerLink]="['AppWebSocket']">AppWebSocket</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/app-websocket',
    name: 'AppWebSocket',
    component: WebsocketComponent,
    useAsDefault: true
  }
])
export class AngularSampleAppComponent {}


