import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productsComponent } from './products/products.component';
import { productComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    productsComponent,
    productComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
