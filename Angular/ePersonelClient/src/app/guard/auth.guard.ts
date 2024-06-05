import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  if(localStorage.getItem("token")){
    return true;
  }

  const router = inject(Router);

  router.navigateByUrl("/login");

  return false;
  
};
