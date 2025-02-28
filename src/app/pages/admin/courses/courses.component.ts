import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isFormOpen = false;
  formMode: 'create' | 'update' = 'create';
  courseForm: Course = { id: 0, name: '', code: '', credits: 0, description: '', enrollments: [], exams: [] };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error("Error loading courses:", err);
      }
    });
  }

  trackByCourse(index: number, course: Course): number {
    return course.id;
  }
  

  openForm(mode: 'create' | 'update', course?: Course): void {
    this.formMode = mode;
    this.isFormOpen = true;
    this.courseForm = course ? { ...course } : { id: 0, name: '', code: '', credits: 0, description: '', enrollments: [], exams: [] };
  }

  closeForm(): void {
    this.isFormOpen = false;
  }

  submitForm(): void {
    if (this.formMode === 'create') {
      this.courseService.createCourse(this.courseForm).subscribe(() => {
        this.loadCourses();
        this.closeForm();
      });
    } else {
      this.courseService.updateCourse(this.courseForm.id, this.courseForm).subscribe(() => {
        this.loadCourses();
        this.closeForm();
      });
    }
  }

  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.courses = this.courses.filter(c => c.id !== id);
      });
    }
  }
}