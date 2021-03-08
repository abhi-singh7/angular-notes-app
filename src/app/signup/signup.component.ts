import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  isLoading= false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

onSubmit(form: NgForm){
  if (!form.valid){
    return;
  }
  console.log(form.value);
  const email= form.value.email;
  const password= form.value.password;

  this.isLoading = true;

  this.authService.signup(email, password).subscribe(resData=>{
    console.log(resData);
    this.isLoading = false;
    this.router.navigate(['/login']);
  },
  errorMessage =>{
    console.log(errorMessage);
    this.error = errorMessage;
    this.isLoading = false;
  })

  form.reset();

}



}
