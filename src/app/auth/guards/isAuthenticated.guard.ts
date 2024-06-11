import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // Check if user is authenticated
  const currentUser = localStorage.getItem('currentUser');
  const router = inject(Router);
  if( currentUser ){
    return true;
  }
  
  router.navigateByUrl('/auth/login');
  return false;
};
