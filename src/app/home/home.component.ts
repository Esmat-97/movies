import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { ChildComponent } from '../child/child.component';


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

      constructor(private httpClient: HttpClient) {}


      ngOnInit(): void {
     this.getData()
    
}


getData(): void {
  this.httpClient.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    .subscribe((w: any) => {
      this.data = w.results;
      this.filterdata = w.results;

      console.log(this.filterdata)

    });
  }


   
  handleInput(value:any):void{
    
    console.log(value);
    alert(this.filterdata)
      if(value !==" "){
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
this.data.splice(index,1);
}



                                        
                }

