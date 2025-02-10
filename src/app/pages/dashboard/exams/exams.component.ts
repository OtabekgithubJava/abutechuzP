import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})

export class ExamsComponent {
  exams = [
    { id: 1, course: { name: 'Mathematics' }, type: 'Midterm', totalMarks: 100 },
    { id: 2, course: { name: 'Physics' }, type: 'Final', totalMarks: 150 },
    { id: 3, course: { name: 'Chemistry' }, type: 'Quiz', totalMarks: 50 },
  ];
}