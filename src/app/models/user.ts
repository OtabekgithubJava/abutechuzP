import { UserRole } from '../enums/enum';

export interface User {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  role: UserRole;
}