import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router ) { }

  login( email: string, password: string ): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
