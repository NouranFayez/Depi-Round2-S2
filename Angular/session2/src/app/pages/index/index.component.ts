import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  // title2:any
  title : string = "Angular"
  num = 20
  placeholderInput = "enter your name"
  inputClass = 'form-control'
  inputType = 'text'

  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero."
  element = "<p>Depi -Angular session2 </p>"
  btnAction = 'modal'


  inputValue : any

  emailInput : any

  model ={
    email : "",
    password : "",
    content:""
  }

  handleFunction(){
    return `angular session2`
  }

  handleMax(num1 : any , num2 : number, num3 : number){
    return Math.max(num1 , num2 , num3)
  }

  handleClick(){
    console.log('Clicking')
  }
  handleInput(eve:any , element:any){
    // console.log(eve.target.value)
    console.log(element.value)
    this.inputValue = element.value
    // console.log(element.className)
  }

  handleEnterKey(){
    console.log('enter key')
  }

  handleBtnClick(){
    console.log(this.model)
  }

}


