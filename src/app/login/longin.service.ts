import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class LonginService {

  http: any
  
  constructor(http: Http) {
    this.http = http;
  }

  post(body: any) {
    this
      .http.post('/api/login', body)
      .map(res => res.json())
      .subscribe()
  }
}
