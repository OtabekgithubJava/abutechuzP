export interface Course {
  id: number;
  name?: string | null;
  code?: string | null;
  credits: number;
  description?: string | null;
  enrollments?: [];
  exams?: [];
}