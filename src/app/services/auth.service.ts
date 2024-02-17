import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginFormValues:any={
    username:"",
    password:""
  }


  storedToken :any={
    username:"",
    password:""
  }
  constructor(private router:Router) { }

  openlocal(): void {
    // Assuming you have an API call here to authenticate user and receive token
    const token :any = {
      username:'mohamed',
      password:'111'
    };

    localStorage.setItem('token', JSON.stringify(token))    //login

    this.router.navigate(['/']);

  }

  logout(): void {
    localStorage.removeItem('token');          //header
  }



  isLoggedIn(): boolean {
    return  localStorage.getItem('token') ? true : false ;      //
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }



  /*          */



  getLoginFormValues(formValues:any){
    this.loginFormValues = formValues
    console.log(this.loginFormValues);
    return this.loginFormValues;                //
    
  }

  matchTokenWithFormValues(): boolean {
    this.storedToken = this.getToken();
    if ( this.storedToken.username === this.loginFormValues.username && this.storedToken.password === this.loginFormValues.password) {
      return true;
    }
    return false; // No stored token found
  }
}

