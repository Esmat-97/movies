import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  logout(): void {

  return  localStorage.removeItem('token');          //header
  }



  isLoggedIn(): boolean {
    return  localStorage.getItem('token') ? true : false ;      //

  }




 


  
}

