import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { EventEmitter } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HomeComponent,ContactComponent,AboutComponent,CartComponent],
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" routerLink="login" aria-current="page" href="#">login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="cart" href="#">cart</a>
        </li>

       <button (click)="do()">logout </button>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" (keyup)="handleInput($event)" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
              `,
  styles: [``]
})
export class HeaderComponent {
  title = 'my-project';

  @Output() moh=new EventEmitter<string>();

  searchValue:string="";

  handleInput(e:any){
this.searchValue=e.target.value;
this.moh.emit(this.searchValue)
  }

constructor(private authservice:AuthService ,private router:Router){}

do(){
this.router.navigate(['/login']);
}


}
