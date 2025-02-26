import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from '../models/attendance';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private apiUrl = 'http://localhost:5182/api/attendance';

  constructor(private http: HttpClient, private router: Router) {}


  getAll(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  getById(id: number): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiUrl}/${id}`);
  }

  create(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
  }

  update(id: number, attendance: Attendance): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, attendance);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}