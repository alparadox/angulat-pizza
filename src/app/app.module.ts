import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui/button/button.component';
import { ButtonCartComponent } from './ui/button-cart/button-cart.component';
import { SwitchComponent } from './ui/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonCartComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
