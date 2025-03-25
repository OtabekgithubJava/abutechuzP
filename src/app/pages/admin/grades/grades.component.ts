import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../../services/grade.service';
import { Grade, CreateGradeDto, UpdateGradeDto } from '../../../models/grade';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  filterStudentId?: number;
  filterCourseId?: number;
  grades: Grade[] = [];
  isFormOpen = false;
  formMode: 'create' | 'update' = 'create';
  gradeForm: Grade = this.getDefaultForm();

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.loadGrades();
  }

  trackByGrade(index: number, grade: Grade): number {
    return grade.id;
  }

  private getDefaultForm(): Grade {
    return {
      id: 0,
      studentId: 0,
      courseId: 0,
      score: 0,
      examType: '',
      remarks: ''
    };
  }

  filterByStudent() {
    if (this.filterStudentId) {
      this.gradeService.getByStudent(this.filterStudentId).subscribe({
        next: (data) => this.grades = data,
        error: (err) => console.error('Filter error:', err)
      });
    }
  }

  filterByCourse() {
    if (this.filterCourseId) {
      this.gradeService.getByCourse(this.filterCourseId).subscribe({
        next: (data) => this.grades = data,
        error: (err) => console.error('Filter error:', err)
      });
    }
  }

  clearFilters() {
    this.filterStudentId = undefined;
    this.filterCourseId = undefined;
    this.loadGrades();
  }

  openForm(mode: 'create' | 'update', grade?: Grade): void {
    this.formMode = mode;
    this.isFormOpen = true;
    this.gradeForm = grade ? { ...grade } : this.getDefaultForm();
  }

  submitForm(): void {
    if (this.formMode === 'create') {
      const createDto: CreateGradeDto = {
        studentId: this.gradeForm.studentId,
        courseId: this.gradeForm.courseId,
        score: this.gradeForm.score,
        examType: this.gradeForm.examType,
        remarks: this.gradeForm.remarks
      };
      
      this.gradeService.assignGrade(createDto).subscribe({
        next: () => {
          this.loadGrades();
          this.closeForm();
        },
        error: (err) => console.error('Create failed:', err)
      });
    } else if (this.formMode === 'update') {
      const updateDto: UpdateGradeDto = {
        score: this.gradeForm.score,
        examType: this.gradeForm.examType,
        remarks: this.gradeForm.remarks
      };
      
      this.gradeService.updateGrade(this.gradeForm.id, updateDto).subscribe({
        next: () => {
          this.loadGrades();
          this.closeForm();
        },
        error: (err) => console.error('Update failed:', err)
      });
    }
  }

  loadGrades(): void {
    this.gradeService.getAllGrades().subscribe({
      next: (data) => this.grades = data,
      error: (err) => console.error('Error loading grades:', err)
    });
  }

  deleteGrade(id: number): void {
    if (confirm('Are you sure you want to delete this grade?')) {
      this.gradeService.deleteGrade(id).subscribe({
        next: () => this.grades = this.grades.filter(g => g.id !== id),
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  closeForm(): void {
    this.isFormOpen = false;
  }
}