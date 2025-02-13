import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../models/parent';

@Injectable({ providedIn: 'root' })
export class ParentService {
  private apiUrl = 'http://localhost:5182/api/parent';

  constructor(private http: HttpClient) {}

  createParent(parent: Parent): Observable<Parent> {
    return this.http.post<Parent>(`${this.apiUrl}/create`, parent);
  }

  updateParent(id: number, parent: Parent): Observable<Parent> {
    return this.http.put<Parent>(`${this.apiUrl}/update/${id}`, parent);
  }

  deleteParent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getParentById(id: number): Observable<Parent> {
    return this.http.get<Parent>(`${this.apiUrl}/get/${id}`);
  }

  getAllParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(`${this.apiUrl}/getAll`);
  }

  getByStudent(studentId: number): Observable<Parent[]> {
    return this.http.get<Parent[]>(`${this.apiUrl}/byStudent/${studentId}`);
  }
}