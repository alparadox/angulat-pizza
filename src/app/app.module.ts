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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonCartComponent,
    SwitchComponent,
    ProductCardComponent,
    SortComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
