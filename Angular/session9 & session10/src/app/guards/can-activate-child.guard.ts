import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router  =  inject(Router)
  router.navigateByUrl('/')
  return true;
};
