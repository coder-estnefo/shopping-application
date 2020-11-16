import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password).then( () => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then( () => {
      this.router.navigateByUrl('/user');
    }).catch( (error) => {
      console.log(error.message);
    });
  }
}
