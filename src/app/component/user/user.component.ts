import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userID;
  noItems;

  constructor(
    private auth: AngularFireAuth,
    private cart: CartService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.noItems = this.cart.getCartCount();
    this.getUserID();
  }

  getUserID() {
    
    this.auth.authState.subscribe(user => {
      this.userID = user.uid;
    });
    

    /*
    this.auth.user.subscribe(user => {
      this.userID = user.uid;
    });*/
  }

  checkout() {
    let ITEMS = this.cart.getCartItems();

    for (let item in ITEMS){
      let docID = this.firestore.createId();
      let date = Date();
      let item_name = ITEMS[item]['name'];
      let item_price = ITEMS[item]['price'];
      let item_image = ITEMS[item]['image'];

      this.firestore.collection('orders').doc(this.userID).collection(date).doc(docID).set({
        name: item_name,
        image: item_price,
        price: item_image,
      }).then(() => {
        //console.log("saved");
        this.cart.clearCart();
        this.noItems = this.cart.getCartCount();
      }).catch(e => {
        //console.log("message error->",e);
      });
    }
  }

}
