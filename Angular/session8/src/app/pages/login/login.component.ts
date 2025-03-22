import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = {
    email : '',
    password : ''
  }

  constructor(private global:GlobalService , private router : Router){

  }

  loginForm = new FormGroup({
    email : new FormControl("nouran_ahmed269@hotmail.com" , 
      [Validators.required ,
       Validators.email ,
       Validators.minLength(10)]) , // 
    password : new FormControl(null , 
      [Validators.required])  //  Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')
  })

  get emailControl(){
    return this.loginForm.controls.email
  }
  get passwordControl(){
    return this.loginForm.controls.password
  }
  get loginControls (){
    return this.loginForm.controls
  }

  isSubmitted = false
  myFunc(){

  }


  handleSubmit(){
    this.isSubmitted = true
    console.log(this.loginForm)
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
        this.router.navigateByUrl('/profile')
        this.global.isLogin = true
      })
    }
  }

}
