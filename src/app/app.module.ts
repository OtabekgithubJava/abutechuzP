import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutAbutechComponent } from './pages/about-abutech/about-abutech.component';
import { ResultsComponent } from './pages/results/results.component';
import { WhyStudyAtAbutechComponent } from './pages/why-study-at-abutech/why-study-at-abutech.component';
import { StudentsFeedbackComponent } from './pages/students-feedback/students-feedback.component';
import { PromoteAbutechComponent } from './pages/promote-abutech/promote-abutech.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LocationComponent } from './pages/location/location.component';
import { ExamplesCaruselComponent } from './pages/examples-carusel/examples-carusel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/dashboard/sidebar/sidebar.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { PaymentsComponent } from './pages/dashboard/payments/payments.component';
import { HomeworkComponent } from './pages/dashboard/homework/homework.component';
import { ExamsComponent } from './pages/dashboard/exams/exams.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeworkSubmitComponent } from './pages/dashboard/homework-submit/homework-submit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutAbutechComponent,
    ResultsComponent,
    WhyStudyAtAbutechComponent,
    StudentsFeedbackComponent,
    PromoteAbutechComponent,
    CoursesComponent,
    LocationComponent,
    ExamplesCaruselComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    PaymentsComponent,
    HomeworkComponent,
    ExamsComponent,
    NotificationsComponent,
    SettingsComponent,
    HomeworkSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
