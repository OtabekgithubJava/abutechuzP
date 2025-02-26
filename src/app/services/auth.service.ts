import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  email: string;
  role: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): boolean {
    if (email === 'admin@otabek.me' && password === 'Otabek-07-$') {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
  }
}