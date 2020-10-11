import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  total = 0.00;

  constructor() { }

  addToCart(item) {
    this.cart.push(item);
    this.total += item.price;
  }

  removeFromCart(item) {
    this.cart.splice(this.cart.indexOf(item),1);
    this.total -= item.price;
  }

  getCartItems() {
    return this.cart;
  }

  getNoItems() {
    return this.cart.length;
  }

  getTotalPrice() {
    return this.total.toFixed(2);
  }
}
