export interface Grade {
  id: number;
  studentId: number;
  courseId: number;
  score: number;
  examType?: string;
  remarks?: string;
}

export interface CreateGradeDto {
  studentId: number;
  courseId: number;
  score: number;
  examType?: string;
  remarks?: string;
}

export interface UpdateGradeDto {
  score: number;
  examType?: string;
  remarks?: string;
}