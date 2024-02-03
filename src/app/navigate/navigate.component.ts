import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
constructor(private activatedRoute:ActivatedRoute){}
data:any=[];
httpCliet=inject(HttpClient)

ngOnInit(){
  this.httpCliet.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
  .subscribe((w:any)=>{
    console.log(w.results)
    this.data=w.results;
 console.log( this.activatedRoute.snapshot.params['id'])
})
}
}
