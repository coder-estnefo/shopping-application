import { Injectable } from '@angular/core';
import { Item } from '../../modal/item';
import { Items } from '../../mocks/test.mock';

import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private firestore: AngularFirestore) {}

  getItems() {
    //return of (Items);
    return this.firestore.collection<Item>('items').valueChanges();
  }

  getUserOrders(id) {
    return this.firestore.collection(`orders/history/${id}`).valueChanges();
  }
}
