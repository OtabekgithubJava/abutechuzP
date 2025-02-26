import { Student } from "./student";

export interface Parent {
  id: number;
  name?: string;
  phone?: string;
  relation?: string;
  student: Student;
}