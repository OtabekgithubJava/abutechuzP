import { Enrollment } from "./enrollment";
import { Exam } from "./exam";

export interface Course {
  id: number;
  name?: string | null;
  code?: string | null;
  credits: number;
  description?: string | null;
  enrollments?: Enrollment[];
  exams?: Exam[];
}