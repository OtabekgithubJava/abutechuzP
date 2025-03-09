import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student, StudentDTO } from '../../../models/student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  isFormOpen = false;
  formMode: 'create' | 'update' = 'create';
  studentForm: StudentDTO = this.emptyStudentForm();

  // Filters
  statusFilter = '';
  codeFilter = '';
  courseIdFilter?: number;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  private emptyStudentForm(): StudentDTO {
    return {
      id: 0,
      code: '',
      name: '',
      phone: '',
      email: '',
      dob: '',
      enrollmentDate: '',
      class: [],
      status: 'Active'
    };
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe({
      next: (data) => {
        console.log('Students:', data);
        this.students = data;
        this.filteredStudents = [...data];
      },
      error: (err: any) => console.error('Error loading students:', err)
    });
  }

  openForm(mode: 'create' | 'update', student?: Student): void {
    console.log('Opening form in mode:', mode); 
    console.log('Selected student:', student);
    this.formMode = mode;
    this.isFormOpen = true;
    this.studentForm = student ? {
      id: student.id,
      code: student.code,
      name: student.name,
      phone: student.phone,
      email: student.email,
      dob: student.dob,
      enrollmentDate: student.enrollmentDate,
      class: student.class,
      status: student.status 
    } : this.emptyStudentForm();
  }

  submitForm(): void {
    if (this.formMode === 'create') {
      this.studentService.createStudent(this.studentForm).subscribe({
        next: () => {
          this.loadStudents(); 
          this.closeForm();
        },
        error: (err) => {
          console.error('Error creating student:', err);
          alert('Failed to create student. Please check the console for details.');
        }
      });
    } else {
      this.studentService.updateStudent(this.studentForm.id, this.studentForm).subscribe({
        next: () => {
          this.loadStudents(); 
          this.closeForm();
        },
        error: (err) => {
          console.error('Error updating student:', err);
          this.loadStudents(); 
          this.closeForm();
        }
      });
    }
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          console.log('Student deleted successfully');
          this.loadStudents(); 
        },
        error: (err: any) => {
          console.error('Delete failed:', err);
          alert('Failed to delete student. Please check the console for details.');
        }
      });
    }
  }

  filterByStatus(): void {
    console.log('Filtering by status:', this.statusFilter);
    if (this.statusFilter && this.statusFilter.trim() !== '') {
      this.studentService.getByStatus(this.statusFilter.trim()).subscribe({
        next: (data) => {
          console.log('Filtered students by status:', data);
          this.filteredStudents = data;
        },
        error: (err: any) => console.error('Filter error:', err)
      });
    } else {
      this.filteredStudents = [...this.students]; 
    }
  }
  
  filterByCode(): void {
    console.log('Filtering by code:', this.codeFilter);
    if (this.codeFilter && this.codeFilter.trim() !== '') {
      this.studentService.getByCode(this.codeFilter.trim()).subscribe({
        next: (data) => {
          console.log('Filtered students by code:', data);
          this.filteredStudents = data;
        },
        error: (err: any) => console.error('Filter error:', err)
      });
    } else {
      this.filteredStudents = [...this.students]; 
    }
  }

  filterByCourse(): void {
    console.log('Filtering by course ID:', this.courseIdFilter);
    if (this.courseIdFilter && this.courseIdFilter > 0) { 
      this.studentService.getByCourse(this.courseIdFilter).subscribe({
        next: (data) => {
          console.log('Filtered students by course:', data);
          this.filteredStudents = data;
        },
        error: (err: any) => console.error('Filter error:', err)
      });
    } else {
      this.filteredStudents = [...this.students]; 
    }
  }

  clearFilters(): void {
    this.statusFilter = '';
    this.codeFilter = '';
    this.courseIdFilter = undefined;
    this.filteredStudents = [...this.students]; 
  }

  closeForm(): void {
    this.isFormOpen = false;
  }

  trackByStudent(index: number, student: Student): number {
    return student.id;
  }
}