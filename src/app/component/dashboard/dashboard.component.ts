import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/modal/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Item[];
  items_count;
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
    this.getNoItems();
  }

  async getItems() {
    this.itemService.getItems().subscribe(item => this.items = item);
    console.log("getItems()=>",this.items);
  }

  async getNoItems() {
    this.items_count = this.items;
    console.log("getNoItems()=>",this.items_count);
  }

  goTime() {
    this.getItems();
    this.getNoItems();
  }

}
