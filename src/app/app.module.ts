import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui/button/button.component';
import { ButtonCartComponent } from './ui/button-cart/button-cart.component';
import { SwitchComponent } from './ui/switch/switch.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SortComponent } from './ui/sort/sort.component';
import { FilterComponent } from './ui/filter/filter.component';
import {HttpClientModule} from "@angular/common/http";
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './list/list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonCartComponent,
    SwitchComponent,
    ProductCardComponent,
    SortComponent,
    FilterComponent,
    CartComponent,
    OrderComponent,
    CartEmptyComponent,
    HeaderComponent,
    ListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
