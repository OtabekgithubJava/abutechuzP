export interface FeePayment {
  id: number;
  studentId: number;
  amount: number;
  date: string; 
  status: boolean;
  paymentMonth?: string;
}

export interface CreateFeePaymentDto {
  studentId: number;
  amount: number;
  date: string;
  status: boolean;
  paymentMonth?: string;
}

export interface UpdateFeePaymentDto {
  amount: number;
  date: string;
  status: boolean;
  paymentMonth?: string;
}