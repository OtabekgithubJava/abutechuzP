import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settings = [
    {
      title: 'Enable Notifications',
      description: 'Receive email notifications about homework, payments, and exams.',
      enabled: true
    },
    {
      title: 'Dark Mode',
      description: 'Switch to a dark theme for better readability at night.',
      enabled: false
    },
    {
      title: 'Auto Update',
      description: 'Automatically update your profile information from external systems.',
      enabled: true
    }
  ];

  toggleSetting(index: number) {
    this.settings[index].enabled = !this.settings[index].enabled;
  }
}