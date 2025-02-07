import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework-submit',
  templateUrl: './homework-submit.component.html',
  styleUrls: ['./homework-submit.component.scss']
})
export class HomeworkSubmitComponent implements OnInit {
  homeworkId: string = '';
  submittedText: string = '';
  submittedFiles: File[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.homeworkId = this.route.snapshot.paramMap.get('id') || '';
  }

  onFileSelected(event: any) {
    this.submittedFiles = Array.from(event.target.files);
  }

  submitHomework() {
    console.log('Submitted Text:', this.submittedText);
    console.log('Submitted Files:', this.submittedFiles);
    alert('Homework submitted successfully!');
  }
}