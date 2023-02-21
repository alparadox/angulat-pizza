import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./components/cart/cart.component";
import {CartEmptyComponent} from "./components/cart-empty/cart-empty.component";
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cart', component: CartComponent},
  { path: 'cart-empty', component: CartEmptyComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
