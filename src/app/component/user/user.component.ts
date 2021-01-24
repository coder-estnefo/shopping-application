import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userID;
  noItems;

  constructor(
    private auth: AngularFireAuth,
    private cart: CartService,
    private firestore: AngularFirestore,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noItems = this.cart.getCartCount();
    this.getUserID();
  }

  getUserID() {
    this.auth.user.subscribe((user) => {
      if (user) {
        if (user.isAnonymous) {
          this.auth.signOut().then(() => {
            this.router.navigate(['/login']);
          });
        }
      }
    });

    this.userID = this.loginService.getUserID();

    // this.auth.authState.subscribe((user) => {
    //   this.userID = user.uid;
    // });

    /*
    this.auth.user.subscribe(user => {
      this.userID = user.uid;
    });*/
  }

  checkout() {
    let orderNo = this.getTime();
    let cart_items = this.cart.getCartItems();
    let cart_price = this.cart.getCartPrice();

    this.firestore
      .collection('orders')
      .doc('history')
      .collection(this.userID)
      .doc(orderNo)
      .set({
        user_id: this.userID,
        order_no: orderNo,
        items: cart_items,
        items_price: cart_price,
      })
      .then(() => {
        //console.log("saved");
        this.firestore
          .collection('orders-history')
          .doc(this.getTime())
          .set({
            user_id: this.userID,
            order_no: orderNo,
            items: cart_items,
            items_price: cart_price,
          })
          .then(() => {
            this.cart.clearCart();
            this.noItems = this.cart.getCartCount();
          });
      })
      .catch((e) => {
        //console.log("message error->",e);
      });
  }

  getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let mm;
    let dd;
    let hh;
    let mi;
    let ss;

    if (month < 10) {
      mm = '0' + month;
    } else {
      mm = month;
    }

    if (day < 10) {
      dd = '0' + day;
    } else {
      dd = day;
    }

    if (hours < 10) {
      hh = '0' + hours;
    } else {
      hh = hours;
    }

    if (minutes < 10) {
      mi = '0' + minutes;
    } else {
      mi = minutes;
    }

    if (seconds < 10) {
      ss = '0' + seconds;
    } else {
      ss = seconds;
    }

    let dateTime = '' + year + mm + dd + hh + mi + ss;

    return dateTime;
  }
}
