import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgFor } from '@angular/common';

import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { ChildComponent } from '../child/child.component';
import { GtMovieService } from '../services/gt-movie.service';
import { CartServiseService } from '../services/cart-servise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HttpClientModule,ChildComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

     getting:any;
      itemtocart:any;
      data:any=[];
      filterdata:any=[];

      

      constructor(
        private  gtMovie:GtMovieService,
        private  router:Router,
        private cartService: CartServiseService){}



        /*         fetch                  */


      ngOnInit(){
      
        this.gtMovie.movieList().subscribe(  (res:any)=>{ 
           this.filterdata=res.results;
          this.data= res.results; 
         
      console.log(this.filterdata); 
      
      })
      
      }


      /*                    */



   add(y:string) {
    
  console.log(y);
this.itemtocart=  this.data.find((ele:any)=>ele.id == y);
console.log(this.itemtocart);
this.cartService.addToCart(this.itemtocart);
    alert('Product added to cart');
      }




  

      /*                       */


   
  handleInput(value:any):void{

    console.log(value);
      if(value ==" "){
      this.filterdata == this.data                           
                  }
     else{
                                           
        this.filterdata = this.data.filter((item:any)=>item.title.includes(value) )
   }
 
 
   }    



  /*                         */
   
                                   
                                                                                                         
recive(id:string){
console.log(id);
this.getting=  this.data.find((item:any)=>item.id== id);
console.log(this.getting)
const index=  this.data.indexOf(this.getting)
this.filterdata.splice(index,1);
}



                                        
                }

