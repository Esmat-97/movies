import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgFor } from '@angular/common';

import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { ChildComponent } from '../child/child.component';
import { GtMovieService } from '../services/gt-movie.service';
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
      
      data:any=[];
      filterdata:any=[];

      

      constructor(private  gtMovie:GtMovieService,private  router:Router){}


      ngOnInit(){
      
        this.gtMovie.movieList().subscribe(  (res:any)=>{ 
           this.filterdata=res.results;
          this.data= res.results; 
         
      console.log(this.filterdata); 
      
      })
      
      }

  
   
  handleInput(value:any):void{

    console.log(value);
      if(value ==" "){
      this.filterdata == this.data                           
                  }
     else{
                                           
        this.filterdata = this.data.filter((item:any)=>item.title.includes(value) )
   }
 
 
                                           }    




   
                                   
                                                                                                         
recive(id:string){
console.log(id);
this.getting=  this.data.find((item:any)=>item.id== id);
const index=  this.data.indexOf(this.getting)
this.filterdata.splice(index,1);
}



                                        
                }

