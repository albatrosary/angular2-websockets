import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  http: any
  
  constructor(http: Http) {
    this.http = http;
  }

  public get() {
    return this.http.get('/api/login').toPromise()
  }
  
  public post(data: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/login', JSON.stringify(data), {headers: headers}).toPromise()
  }
}
