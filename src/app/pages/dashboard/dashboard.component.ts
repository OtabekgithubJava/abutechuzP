import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: any = {};  // Store 

  constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.getUserData();
  // }

  // getUserData(): void {
  //   const userId = localStorage.getItem('userId');
  //   const token = localStorage.getItem('token');

  //   if (userId && token) {
  //     this.authService.getUserData(userId, token).subscribe(
  //       (response) => {
  //         this.userData = response;  
  //       },
  //       (error) => {
  //         console.error('Error fetching user data:', error);
  //       }
  //     );
  //   }
  // }
}