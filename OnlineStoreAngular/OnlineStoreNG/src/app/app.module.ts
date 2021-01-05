import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreHomePageComponent } from './store-home-page/store-home-page.component';
import { SharedService } from './services/shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './user-account/login/login.component';
import { SignupComponent } from './user-account/signup/signup.component';
import { ShoppingCartComponent } from './/store-home-page/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './/store-home-page/product-item/product-item.component';
import { UserAccountComponent } from './user-account/user-account.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreHomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
