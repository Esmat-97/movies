import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiseService {

  

  items :any[]= [];
  ngOnInit(){
    console.log(this.items)
  }

  addToCart(itemtocart:any) {
    this.items.push(itemtocart);
  }

  getItems() {
    return this.items;
  }

}
