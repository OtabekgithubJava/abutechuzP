import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    if (this.username === 'admin@otabek.me' && this.password === 'Otabek-07-$') {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/admin/dashboard'], { 
        replaceUrl: true,
        queryParamsHandling: 'merge'
      }).then(() => {
        window.location.reload();
      });
    } else if (this.username === 'abutech@outlook.com' && this.password === '15215') {
      localStorage.setItem('isVideoAuthenticated', 'true');
      this.router.navigate(['/video'], { 
        replaceUrl: true,
        queryParamsHandling: 'merge'
      }).then(() => {
        window.location.reload();
      });
    } else {
      this.errorMessage = 'Xato parol yoki email!';
      this.password = '';
    }
  }
}