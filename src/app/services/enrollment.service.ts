import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private apiUrl = 'http://localhost:5182/api/enrollment';

  constructor(private http: HttpClient) {}

  enrollStudent(studentId: number, courseId: number): Observable<Enrollment> {
    return this.http.post<Enrollment>(
      `${this.apiUrl}/enroll?studentId=${studentId}&courseId=${courseId}`,
      {}
    );
  }

  unenrollStudent(studentId: number, courseId: number): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/unenroll?studentId=${studentId}&courseId=${courseId}`,
      {}
    );
  }

  getByCourse(courseId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/byCourse/${courseId}`);
  }

  getByStudent(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/byStudent/${studentId}`);
  }

  getById(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }
}