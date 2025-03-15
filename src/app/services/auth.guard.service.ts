import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean | UrlTree {
    if (route.routeConfig.path === 'video') {
      if (this.authService.isVideoAuthenticated()) {
        return true;
      }
      return this.router.parseUrl('/admin/login');
    } else {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      return this.router.parseUrl('/admin/login');
    }
  }
}