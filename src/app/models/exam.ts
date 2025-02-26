import { ExamType } from "../enums/enum";
import { Course } from "./course";

export interface Exam {
  id: number;
  course: Course;
  type?: ExamType;  
  totalMarks: number;
}