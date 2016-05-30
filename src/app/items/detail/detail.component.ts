import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
    <p>{{id}}</p>
    <p>{{password}}</p>
    <p>{{name}}</p>
  `
})
export class DetailComponent {
  @Input('detail-id')
  private id;
  
  @Input('detail-password')
  private password;
  
  @Input('detail-name')
  private name;
}
