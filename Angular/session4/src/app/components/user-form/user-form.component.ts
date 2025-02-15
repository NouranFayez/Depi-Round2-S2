import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Output() userEvent = new EventEmitter()
  model = {
    userName : '',
    userEmail : "",
    UserID : ""
  }
  handleClick(){
    const obj = {
      userName : this.model.userName,
      userEmail : this.model.userEmail,
      UserID : this.model.UserID}
    this.userEvent.emit(obj)
  }

}
