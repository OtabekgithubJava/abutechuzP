export interface FeePayment {
    id: number;
    studentId: number;
    amount: number;
    date: string;
    status: boolean;
    paymentMonth?: string;
  }
  