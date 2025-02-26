import { Student } from "./student";

export interface FeePayment {
  id: number;
  student: Student;
  amount: number;
  date: Date;
  status: boolean;
  paymentMonth?: string;
}