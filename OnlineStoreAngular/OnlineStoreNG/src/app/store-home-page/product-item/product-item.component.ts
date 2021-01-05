import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../models/products';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private message: MessengerService) { }

  @Input() productItem : Products

  ngOnInit(): void {
 
  }

  handleAddToCart(){
    this.message.sendMessage(this.productItem)
  }
}
