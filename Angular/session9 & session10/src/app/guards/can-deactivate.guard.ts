import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component)

  if(!component.isSubmitted && component.loginForm.value.email != '' && component.loginForm.value.password!=''){
    let conf = confirm('are you sure you want leave before saving the changes ?')
    if(conf) return true
    else return false
  }
  return true;
};
