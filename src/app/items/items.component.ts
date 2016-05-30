import {Component, OnInit} from '@angular/core';
import {DetailComponent} from './detail/detail.component';
import {ItemsService} from './items.service';
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'app-items',
  template: `
    <app-detail *ngFor="let item of items; let i = index"
     detail-id={{item.userid}}
     detail-password={{item.password}}
     detail-name={{item.name}}
    >
    </app-detail>
  `
  ,
  directives: [DetailComponent],
  providers: [ItemsService, HTTP_PROVIDERS]
})
export class ItemsComponent implements OnInit {

  itemsService: any
  items: any

  constructor(itemsService: ItemsService) {
    this.itemsService = itemsService
  }

  ngOnInit() {
    this.itemsService.get()
      .then(response => this.items = JSON.parse(response._body))
      .catch(error => console.log(error));
  }

}
