import { Component, OnInit } from '@angular/core';
import { Item } from '../../../modal/item';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Item[] = [];
  total;
  count;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getCartPrice();
    this.count = this.cartService.getCartCount();
  }

  remove(item) {
    this.cartService.removeFromCart(item);
    this.total = this.cartService.getCartPrice();
    this.count = this.cartService.getCartCount();
  }

  addItem(item) {
    this.cartService.addToCart(item);
    this.count = this.cartService.getCartCount();
    this.total = this.cartService.getCartPrice();
  }

  removeOneItem(item) {
    this.cartService.removeOneItem(item);
    this.count = this.cartService.getCartCount();
    this.total = this.cartService.getCartPrice();
  }
}
