import { Student } from "./student";
import { Course } from "./course";
import { AttendanceStatus } from "../enums/enum";

export interface Attendance {
  id: number;
  student: Student;          
  course: Course;
  date: Date;
  status: AttendanceStatus; 
}