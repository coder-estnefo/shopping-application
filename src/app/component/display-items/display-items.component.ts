import { Component, OnInit } from '@angular/core';
import { Item } from '../../../modal/item';
import { ItemService } from '../../service/item.service';
import { CartService } from '../../service/cart.service';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private storage: AngularFireStorage
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

  getImage(img) {
    // images/yq7dudgvxl.png
    return this.storage.ref(`/images/${img}`).getDownloadURL();
  }


}
