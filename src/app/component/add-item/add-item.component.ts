import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item;
  price;
  image;
  uploadPercent: Observable<number>;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filename = file.name;
    const fileExt = filename.split('.').pop();
    const filePath = Math.random().toString(36).substring(2) + '.' + fileExt;
    const task = this.storage.upload(`images/${filePath}`, file);

    this.image = filePath;
    this.uploadPercent = task.percentageChanges();
  }

  uploadItem() {
    const id = this.firestore.createId();

    this.firestore.collection("items").doc(id).set({
      name: this.item,
      price: this.price,
      image: this.image
    }).catch(error => {
      console.log("not added error ->" + error);
    }).then(() => {
      console.log("added");
      this.router.navigate(["/home"]);
    })

  }
}
