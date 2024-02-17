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

   token :any = {
    username:'mohamed',
    password:'111'
  };

  constructor(private router:Router) { }

  openlocal(): void {
   
    localStorage.setItem('token', JSON.stringify(this.token))    
   
      if ( this.token.username === this.loginFormValues.username && this.token.password === this.loginFormValues.password) {
          this.router.navigate(['/']);

      }
  
  }




  logout(): void {
    localStorage.removeItem('token');          //header
  }



  isLoggedIn(): boolean {
    return  localStorage.getItem('token') ? true : false ;      //

  }




  getLoginFormValues(formValues:any){
    this.loginFormValues = formValues
    console.log(this.loginFormValues);
    return this.loginFormValues;                //  from login
    
  }


  
}

