import { Component, OnInit } from '@angular/core';
import { Item } from '../../../modal/item';
import { ItemService } from '../../service/item.service';
import { CartService } from '../../service/cart.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { of } from 'rxjs';
import { finalize, first, take } from 'rxjs/operators';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit {

  food_items: Item[];
  cart_items: Item[] = [];
  count;
  constructor(
    private itemService: ItemService,
    private cartService: CartService,
    public storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getFoodItems();
    this.count = this.cartService.getNoItems();
  }

  getFoodItems() {
    this.itemService.getItems().subscribe(item => this.food_items = item);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
    this.count = this.cartService.getNoItems();
  }

}
