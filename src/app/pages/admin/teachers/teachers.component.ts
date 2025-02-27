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

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (data) => {
        console.log("Received teachers:", data); 
        this.teachers = data;
      },
      error: (err) => {
        console.error("Error loading teachers:", err);
      }
    });
  }  

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe(() => {
        this.teachers = this.teachers.filter((t) => t.id !== id);
      });
    }
  }
}
