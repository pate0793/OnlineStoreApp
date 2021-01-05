import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Products } from '../models/products';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-store-home-page',
  templateUrl: './store-home-page.component.html',
  styleUrls: ['./store-home-page.component.css']
})
export class StoreHomePageComponent implements OnInit {

  constructor(private service:SharedService, private message: MessengerService) { }

  cartItem = [];
   
  cartTotal = 0;

  ProductList:Products[] = []

  ngOnInit() {
    this.message.getMessage().subscribe((product: Products) => {
      this.addProductToCart(product)
    })
    this.service.getProductList().subscribe((products) => { this.ProductList = products;})
  }

  addProductToCart(product: Products){

    let productExist = false

    for (let j in this.cartItem){
      if(this.cartItem[j].id === product.Product_Id){
        this.cartItem[j].qty ++
        productExist = true
        break;
      }
    }

    if(!productExist){
      this.cartItem.push({
        id: product.Product_Id,
        product_Name: product.Name,
        qty: 1,
        price: product.Price
      })   
    }

    this.cartTotal = 0

    this.cartItem.forEach(item=>{this.cartTotal += (item.qty * item.price) })
  }



}
