import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  //item;
  //price;
  image;
  uploadPercent: Observable<number>;
  itemForm;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      item: ['', Validators.required],
      price: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filename = file.name;
    const fileExt = filename.split('.').pop();
    const filePath = Math.random().toString(36).substring(2) + '.' + fileExt;
    const fileRef = this.storage.ref(`images/${filePath}`);
    const task = this.storage.upload(`images/${filePath}`, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          this.image = downloadURL;
        });
      })
   )
  .subscribe()
  }

  uploadItem(form) {
    let item_name = form.value.item;
    let item_price = form.value.price;
    let item_image = this.image;

    const id = this.firestore.createId();

    this.firestore.collection("items").doc(id).set({
      name: item_name,
      price: item_price,
      image: item_image
    }).catch(error => {
      //console.log("not added error ->" + error);
    }).then(() => {
      //console.log("added");
      this.router.navigate(["/home/dashboard"]);
    })

  }
}
