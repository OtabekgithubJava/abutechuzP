import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {
  homeworks = [
    { id: '1', title: 'Real-time Notification', description: 'Create a real-time notification feature in .NET.' },
    { id: '2', title: 'File Upload', description: 'Implement file upload functionality.' },
    { id: '3', title: 'User Authentication', description: 'Build a login and registration system.' }
  ];
}
