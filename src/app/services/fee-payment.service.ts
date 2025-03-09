import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeePayment, CreateFeePaymentDto, UpdateFeePaymentDto } from '../models/fee-payement';

@Injectable({ providedIn: 'root' })
export class FeePaymentService {
  private apiUrl = 'http://localhost:5182/api/feePayment';

  constructor(private http: HttpClient) {}

  createPayment(payment: CreateFeePaymentDto): Observable<FeePayment> {
    return this.http.post<FeePayment>(`${this.apiUrl}/create`, payment);
  }
  
  updatePayment(id: number, payment: UpdateFeePaymentDto): Observable<FeePayment> {
    return this.http.put<FeePayment>(`${this.apiUrl}/update/${id}`, payment);
  }

  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getPaymentById(id: number): Observable<FeePayment> {
    return this.http.get<FeePayment>(`${this.apiUrl}/get/${id}`);
  }

  getAllPayments(): Observable<FeePayment[]> {
    return this.http.get<FeePayment[]>(`${this.apiUrl}/getAll`);
  }

  getByStudent(studentId: number): Observable<FeePayment[]> {
    return this.http.get<FeePayment[]>(`${this.apiUrl}/byStudent/${studentId}`);
  }

  getByMonth(month: string): Observable<FeePayment[]> {
    return this.http.get<FeePayment[]>(`${this.apiUrl}/byMonth/${month}`);
  }
}