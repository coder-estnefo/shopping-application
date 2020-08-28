import { Injectable } from '@angular/core';
import { Item } from '../../modal/item';
import { Items } from '../../mocks/test.mock';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of (Items);
  }
}
