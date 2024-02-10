import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartServiseService } from '../services/cart-servise.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})




export class CartComponent {

  IMGPATH :string = 'https://image.tmdb.org/t/p/w1280';

  items: any = [];
  
  constructor(  private cartService: CartServiseService){

    
  }

   ngOnInit() {
    
      this.items =  this.cartService.getItems();
      console.log(this.items);
  
  }
  
}