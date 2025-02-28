// teachers.component.ts
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];
  isFormOpen = false;
  formMode: 'create' | 'update' = 'create';
  teacherForm: Teacher = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    courses: []
  };

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  trackByTeacher(index: number, teacher: Teacher): number {
    return teacher.id;
  }

  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (data) => this.teachers = data,
      error: (err) => console.error('Error loading teachers:', err)
    });
  }

  openForm(mode: 'create' | 'update', teacher?: Teacher): void {
    this.formMode = mode;
    this.isFormOpen = true;
    this.teacherForm = teacher ? { ...teacher } : {
      id: 0,
      name: '',
      email: '',
      phone: '',
      courses: []
    };
  }

  submitForm(): void {
    if (this.formMode === 'create') {
      this.teacherService.createTeacher(this.teacherForm).subscribe({
        next: () => {
          this.loadTeachers();
          this.closeForm();
        },
        error: (err) => console.error('Create failed:', err)
      });
    } else {
      this.teacherService.updateTeacher(this.teacherForm.id, this.teacherForm).subscribe({
        next: () => {
          this.loadTeachers();
          this.closeForm();
        },
        error: (err) => console.error('Update failed:', err)
      });
    }
  }

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe({
        next: () => this.teachers = this.teachers.filter(t => t.id !== id),
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  closeForm(): void {
    this.isFormOpen = false;
  }
}