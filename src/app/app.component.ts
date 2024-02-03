import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HttpClientModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';

recive(masr:string){
console.log(masr)
}
  
  data:any=[];
  httpCliet=inject(HttpClient)

  ngOnInit(): void {
   this.httpCliet.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    .subscribe((w:any)=>{
      console.log(w.results)
      this.data=w.results;
    })
  }
  
   

}
