import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): boolean {
    if (email === 'admin@otabek.me' && password === 'Otabek-07-$') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('isAuthenticated', 'true');
      }
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true') {
      return true;
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
    }
  }
}