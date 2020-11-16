import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  loginError;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth
    ) { }

  ngOnInit(): void {
    this.loginDetails = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(details) {

    if(details.value.username === 'user' && details.value.password === 'user') {
      this.auth.signInAnonymously().then(() => {
        this.router.navigate(['/home/dashboard']);
      }).catch(() => {
        this.loginError = "Invalid Login Details";
      });
    } else {
      this.auth.signInWithEmailAndPassword(details.value.username, details.value.password).then(() => {
        this.router.navigate(['/user']);
      }).catch(() => {
        this.loginError = "Invalid Login Details";
      });
    }
  
  }
  

}
