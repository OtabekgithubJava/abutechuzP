import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})

export class PaymentsComponent {
  payments = [
    { id: 1, date: new Date('2023-10-01'), amount: 500, paymentMonth: 'October 2023', status: true },
    { id: 2, date: new Date('2023-11-01'), amount: 500, paymentMonth: 'November 2023', status: false },
    { id: 3, date: new Date('2023-12-01'), amount: 500, paymentMonth: 'December 2023', status: true },
  ];

  get totalPaid(): number {
    return this.payments.filter(p => p.status).reduce((sum, p) => sum + p.amount, 0);
  }

  get totalPending(): number {
    return this.payments.filter(p => !p.status).reduce((sum, p) => sum + p.amount, 0);
  }
}