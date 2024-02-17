import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  formValues = {
    username: '',
    password: ''
  };

  handleSubmit(main :any){

console.log(main);
console.log(main.value);

this.formValues = main.value;

console.log(this.formValues);

this.authservice.getLoginFormValues(this.formValues);


    this.authservice.openlocal();


  }

  constructor(private authservice:AuthService){}

 
 
}


