import { Student } from "./student";

export interface FeePayment {
  id: number;
  studentId: number;
  amount: number;
  date: Date;
  status: boolean;
  paymentMonth?: string;
}