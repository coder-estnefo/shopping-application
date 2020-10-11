import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
