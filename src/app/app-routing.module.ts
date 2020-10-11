import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DisplayItemsComponent } from './component/display-items/display-items.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '', component: DisplayItemsComponent},
  {path: 'shop', component: DisplayItemsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {path: 'add-item', component: AddItemComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
