import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  IMGPATH :string = 'https://image.tmdb.org/t/p/w1280';

  @Input() getitem : any;
  @Output() mody=new EventEmitter<string>();
  @Output() carting=new EventEmitter<string>();

  handleDelete(id:string){
console.log(id)
this.mody.emit(id);
  }


  addToCart(y:string){
    console.log(y)
    this.mody.emit(y);
  }

constructor(private router:Router){}

  handleNavigate(id:string){
this.router.navigate(['/navigate',id])
  }


}
