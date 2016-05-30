import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemsService {

  http: any
  
  constructor(http: Http) {
    this.http = http;
  }

  public get() {
    return this.http.get('/api/items').toPromise()
  }
}
