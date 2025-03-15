import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutAbutechComponent } from './pages/about-abutech/about-abutech.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AuthGuardService } from './services/auth.guard.service';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { TeachersComponent } from './pages/admin/teachers/teachers.component';
import { CoursesComponent } from './pages/admin/courses/courses.component';
import { EnrollmentsComponent } from './pages/admin/enrollments/enrollments.component';
import { ExamsComponent } from './pages/admin/exams/exams.component';
import { GradesComponent } from './pages/admin/grades/grades.component';
import { PaymentsComponent } from './pages/admin/payments/payments.component';
import { ParentsComponent } from './pages/admin/parents/parents.component';
import { StudentsComponent } from './pages/admin/students/students.component';
import { VideosComponent } from './pages/videos/videos.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (!this.authService.isLoggedIn()) {
//       this.router.navigate(['/login']);
//       return false;
//     }
//     return true;
//   }
// }


const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'video', 
    component: VideosComponent, 
    canActivate: [AuthGuardService],
    pathMatch: 'full' 
  },
  { 
    path: 'admin',
    children: [
      { path: 'login', component: AdminLoginComponent },
      { 
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AuthGuardService],
        children: [
          { path: 'students', component: StudentsComponent },
          { path: 'teachers', component: TeachersComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'enrollments', component: EnrollmentsComponent },
          { path: 'exams', component: ExamsComponent },
          { path: 'grades', component: GradesComponent },
          { path: 'payments', component: PaymentsComponent },
          { path: 'parents', component: ParentsComponent },
          { path: '', redirectTo: 'students', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
