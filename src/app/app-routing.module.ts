import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutAbutechComponent } from './pages/about-abutech/about-abutech.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { PaymentsComponent } from './pages/dashboard/payments/payments.component';
import { HomeworkComponent } from './pages/dashboard/homework/homework.component';
import { ResultsComponent } from './pages/results/results.component';
import { ExamsComponent } from './pages/dashboard/exams/exams.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { HomeworkSubmitComponent } from './pages/dashboard/homework-submit/homework-submit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'homework', component: HomeworkComponent },
      { path: 'homework/:id', component: HomeworkSubmitComponent },
      { path: 'exams', component: ExamsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
