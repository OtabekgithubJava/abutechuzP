import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade, CreateGradeDto, UpdateGradeDto } from '../models/grade';

@Injectable({ providedIn: 'root' })
export class GradeService {
  private apiUrl = 'http://localhost:5182/api/grade';

  constructor(private http: HttpClient) {}

  assignGrade(grade: CreateGradeDto): Observable<Grade> {
    return this.http.post<Grade>(`${this.apiUrl}/assign`, grade);
  }

  updateGrade(id: number, grade: UpdateGradeDto): Observable<Grade> {
    return this.http.put<Grade>(`${this.apiUrl}/update/${id}`, grade);
  }

  deleteGrade(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getGradeById(id: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.apiUrl}/get/${id}`);
  }

  getAllGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/getAll`);
  }

  getByStudent(studentId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/byStudent/${studentId}`);
  }

  getByCourse(courseId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/byCourse/${courseId}`);
  }
}