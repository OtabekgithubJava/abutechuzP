import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';

@Injectable({ providedIn: 'root' })
export class ExamService {
  private apiUrl = 'http://localhost:5182/api/exam';

  constructor(private http: HttpClient) {}

  createExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${this.apiUrl}/create`, exam);
  }

  updateExam(id: number, exam: Exam): Observable<Exam> {
    return this.http.put<Exam>(`${this.apiUrl}/update/${id}`, exam);
  }

  deleteExam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getExamById(id: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.apiUrl}/get/${id}`);
  }

  getAllExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/getAll`);
  }
}