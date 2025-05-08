import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutAbutechComponent } from './pages/about-abutech/about-abutech.component';
import { ResultsComponent } from './pages/results/results.component';
import { WhyStudyAtAbutechComponent } from './pages/why-study-at-abutech/why-study-at-abutech.component';
import { StudentsFeedbackComponent } from './pages/students-feedback/students-feedback.component';
import { PromoteAbutechComponent } from './pages/promote-abutech/promote-abutech.component';
import { LocationComponent } from './pages/location/location.component';
import { ExamplesCaruselComponent } from './pages/examples-carusel/examples-carusel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
// import { AuthGuard } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './pages/admin/admin-dashboard/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './pages/admin/admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './pages/admin/admin-dashboard/admin-home/admin-home.component';
import { StudentsComponent } from './pages/admin/students/students.component';
import { StudentFormComponent } from './pages/admin/students/student-form/student-form.component';
import { TeachersComponent } from './pages/admin/teachers/teachers.component';
import { TeacherFormComponent } from './pages/admin/teachers/teacher-form/teacher-form.component';
import { CourseFormComponent } from './pages/admin/courses/course-form/course-form.component';
import { EnrollmentsComponent } from './pages/admin/enrollments/enrollments.component';
import { EnrollmentFormComponent } from './pages/admin/enrollments/enrollment-form/enrollment-form.component';
import { ExamsComponent } from './pages/admin/exams/exams.component';
import { ExamFormComponent } from './pages/admin/exams/exam-form/exam-form.component';
import { GradesComponent } from './pages/admin/grades/grades.component';
import { GradeFormComponent } from './pages/admin/grades/grade-form/grade-form.component';
import { PaymentsComponent } from './pages/admin/payments/payments.component';
import { PaymentFormComponent } from './pages/admin/payments/payment-form/payment-form.component';
import { ParentsComponent } from './pages/admin/parents/parents.component';
import { ParentFormComponent } from './pages/admin/parents/parent-form/parent-form.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CoursesComponent } from './pages/admin/courses/courses.component';
import { MockUpsComponent } from './pages/mock-ups/mock-ups.component';


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
    LocationComponent,
    ExamplesCaruselComponent,
    FooterComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    StudentsComponent,
    StudentFormComponent,
    TeachersComponent,
    TeacherFormComponent,
    CourseFormComponent,
    EnrollmentsComponent,
    EnrollmentFormComponent,
    ExamsComponent,
    ExamFormComponent,
    GradesComponent,
    GradeFormComponent,
    PaymentsComponent,
    PaymentFormComponent,
    ParentsComponent,
    ParentFormComponent,
    CoursesComponent,
    VideosComponent,
    MockUpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
