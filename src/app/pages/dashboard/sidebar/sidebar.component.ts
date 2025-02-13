import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarOpen = false;
  
  menuItems = [
    { title: 'Profile', icon: 'fas fa-user', link: '/dashboard/profile' },
    { title: 'Homework', icon: 'fas fa-book', link: '/dashboard/homework' },
    { title: 'Exams', icon: 'fas fa-pencil-alt', link: '/dashboard/exams' },
    { title: 'Payments', icon: 'fas fa-credit-card', link: '/dashboard/payments' },
    { title: 'Notifications', icon: 'fas fa-bell', link: '/dashboard/notifications' },
    { title: 'Settings', icon: 'fas fa-cog', link: '/dashboard/settings' },
    { title: 'Videos', icon: 'fas fa-video', link: '/dashboard/videos' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

}
