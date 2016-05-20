import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularSampleAppComponent, environment } from './app/';

console.log('main.ts');
  
if (environment.production) {
  console.log('environment.production');
  enableProdMode();
}

bootstrap(AngularSampleAppComponent);
