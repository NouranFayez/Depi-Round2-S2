import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-user-image',
  standalone: false,
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css'
})
export class UserImageComponent {

  constructor(private global : GlobalService){}

  handleClick(){
   let input =  document.getElementById('inputFile')
   input?.click()
  }

  userImage : any
  handleChnage(e:any){
    console.log(e)
    this.userImage = e.target.files[0]

    let formData = new FormData()

    formData.append('image' , this.userImage )
    // formData.append('first_name' , "nouran" )

    this.global.changeUserImage(formData).subscribe(res=>{
      console.log(res)
    })


  }

}
