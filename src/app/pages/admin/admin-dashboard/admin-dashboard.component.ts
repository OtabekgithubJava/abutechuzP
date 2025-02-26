import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  currentMonth: string;
  currentYear: number;
  weeks: any[] = [];
  private months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private targetMonths = [2, 3, 4]; 

  constructor() {
    const today = new Date();
    this.currentMonth = this.months[2]; 
    this.currentYear = 2025;
    this.generateCalendar(2, 2025);
  }

  generateCalendar(monthIndex: number, year: number) {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    let day = 1;
    this.weeks = [];

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push({ date: day, isFriday: j === 5 });
          day++;
        }
      }
      this.weeks.push(week);
    }
  }

  previousMonth() {
    const currentIndex = this.targetMonths.indexOf(this.months.indexOf(this.currentMonth));
    if (currentIndex > 0) {
      this.currentMonth = this.months[this.targetMonths[currentIndex - 1]];
      this.generateCalendar(this.targetMonths[currentIndex - 1], this.currentYear);
    }
  }

  nextMonth() {
    const currentIndex = this.targetMonths.indexOf(this.months.indexOf(this.currentMonth));
    if (currentIndex < this.targetMonths.length - 1) {
      this.currentMonth = this.months[this.targetMonths[currentIndex + 1]];
      this.generateCalendar(this.targetMonths[currentIndex + 1], this.currentYear);
    }
  }
}
