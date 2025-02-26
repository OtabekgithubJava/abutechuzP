import { User } from './user';
import { Course } from './course';

export interface Teacher {
  id: number;
  user: User;
  name?: string;
  email?: string;
  phone?: string;
  courses?: Course[];
}