import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart = [];
  // total = 0.00;

  cartList = [];

  constructor() { }

  //************************************************* */
  /*addToCart(item) {
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

  clearCart() {
    return this.cart.splice(0, this.cart.length);
  }*/
  //******************************************************************* */

  addToCart(item) {
    
    if (this.cartList.length == 0) {
        this.cartList.push({'name': item.name, 'price': item.price, 'total_price': item.price,
                      'image': item.image, 'quantity': item.quantity});
    } else {
        let i;
        for (i = 0; i < this.cartList.length; i++) {
          if (item.name == this.cartList[i]['name']) {
              let quantity = this.cartList[i]['quantity'];
              let price = this.cartList[i]['price']
              let total_price = this.cartList[i]['total_price'];
              this.cartList[i]['quantity'] = quantity + 1;
              this.cartList[i]['total_price'] = total_price + price;
              break;
          }
        }

        if(i == this.cartList.length) {
          this.cartList.push({'name': item.name, 'price': item.price, 'total_price': item.price,
                      'image': item.image, 'quantity': item.quantity});
        }
    }
  }

  getCartItems() {
    return this.cartList;
  }

  removeFromCart(item) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (item.name == this.cartList[i]['name']) {
        this.cartList.splice(i, 1);
        break;
      }
    }
  }

  removeOneItem(item) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (item.name == this.cartList[i]['name']) {
          let quantity = this.cartList[i]['quantity'];
          let price = this.cartList[i]['price']
          let total_price = this.cartList[i]['total_price'];
          if (quantity == 1) {
              this.cartList.splice(i, 1);
              break;
          } else {
              this.cartList[i]['quantity'] = quantity - 1;
              this.cartList[i]['total_price'] = total_price - price;
              break;
          }
      }
    }

  }

  getCartPrice() {
    let total = 0.0;
    for (let i = 0; i < this.cartList.length; i++) {
      total += this.cartList[i]['total_price'];
    }

    return total.toFixed(2);
  }

  getCartCount() {
    let total = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      total += this.cartList[i]['quantity'];
    }

    return total;
  }

}
