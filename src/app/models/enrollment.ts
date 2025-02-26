import { Student } from './student';
import { Course } from './course';
import { EnrollmentStatus } from '../enums/enum';

export interface Enrollment {
  id: number;
  student: Student;
  course: Course;
  enrollDate: Date;
  status: EnrollmentStatus;
}