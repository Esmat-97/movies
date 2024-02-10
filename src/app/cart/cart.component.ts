import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CartServiseService } from '../services/cart-servise.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items: any[] = [];
  
  constructor( private cartService: CartServiseService){}

  ngOnInit() {
  this.items= this.cartService.getItems();
   console.log(this.items)
  }

}
