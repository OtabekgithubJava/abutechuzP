import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, StudentDTO } from '../models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:5182/api/students';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  getByStatus(status: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/status/${status}`);
  }

  getByCode(code: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/code/${code}`);
  }

  getByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/course/${courseId}`);
  }

  createStudent(student: StudentDTO): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/create`, student);
  }

  updateStudent(id: number, student: StudentDTO): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/update/${id}`, student);
  }

  deleteStudent(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }
}