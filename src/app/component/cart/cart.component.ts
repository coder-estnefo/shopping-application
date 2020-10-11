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
    this.total = this.cartService.getTotalPrice();
    this.count = this.cartService.getNoItems();
  }

  remove(item) {
    this.cartService.removeFromCart(item);
    this.total = this.cartService.getTotalPrice();
    this.count = this.cartService.getNoItems();
  }
}
