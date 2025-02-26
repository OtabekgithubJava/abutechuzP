import { Student } from './student';
import { Course } from './course';
import { ExamType, GradeRemarks } from '../enums/enum';

export interface Grade {
  id: number;
  student: Student;
  course: Course;
  examType?: ExamType;      
  score: number;
  remarks: GradeRemarks;  
}