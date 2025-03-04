import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url.startsWith('/login');
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  isVideoRoute(): boolean {
    return this.router.url === '/video';
  }
}