import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ItemService } from 'src/app/service/item.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  userID;
  items;

  constructor(
    private angularAuth: AngularFireAuth,
    private itemService: ItemService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userID = this.loginService.getUserID();

    this.getOrderItems();
  }

  getOrderItems() {
    this.itemService.getUserOrders(this.userID).subscribe((itemsObj) => {
      this.items = itemsObj;
    });
  }
}
