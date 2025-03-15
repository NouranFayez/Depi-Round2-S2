import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  errorMsg = null
  constructor(private global : GlobalService ,
     private toastr: ToastrService , private router : Router){
  }
  handleSubmit(form : NgForm){
    if(form.valid){
      console.log(form)
      console.log(this.userLogin)
      // next , error , complete
      this.global.login(this.userLogin).subscribe(res=>{
        console.log(res)
        if(res.status == "Success"){
          // this.router.navigateByUrl("/posts")
          this.router.navigateByUrl("/")
          this.toastr.success('login Successfully')
        }
      },(err)=>{
        console.log(err.error.message)
        this.errorMsg = err.error.message
        this.toastr.error(err.error.message);
      })

    }
  }

}
