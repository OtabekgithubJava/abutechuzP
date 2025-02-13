export interface Grade {
    id: number;
    studentId: number;
    courseId: number;
    examType?: string;
    score: number;
    remarks: string;
  }
  