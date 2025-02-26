import { Enrollment } from './enrollment';
import { User } from './user';

export interface Student {
  id: number;
  user: User;
  name?: string;
  dob: Date;
  email?: string;
  phone?: string;
  enrollmentDate: Date;
  status: string;
  enrollments?: Enrollment[];  
}