import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLogin = {
    email : "",
    password:''
  }
  constructor(private global : GlobalService){

  }

  handleSubmit(form : NgForm){
    if(form.valid){
      console.log(form)
      console.log(this.userLogin)
      this.global.login(this.userLogin).subscribe(res=>{
        console.log(res)
      })

    }
  }

}
