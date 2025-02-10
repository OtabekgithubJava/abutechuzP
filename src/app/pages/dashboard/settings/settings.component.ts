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
      enabled: false
    },
    {
      title: 'Dark Mode',
      description: 'Switch to a dark theme for better readability at night.',
      enabled: false
    },
    {
      title: 'Auto Update',
      description: 'Automatically update your profile information from external systems.',
      enabled: false
    }
  ];

  constructor() {
    this.loadSettings();
  }

  loadSettings() {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
    this.toggleDarkMode(this.settings[1].enabled);
  }

  saveSettings() {
    localStorage.setItem('userSettings', JSON.stringify(this.settings));
  }

  toggleSetting(index: number) {
    this.settings[index].enabled = !this.settings[index].enabled;
    this.saveSettings();

    switch (this.settings[index].title) {
      case 'Enable Notifications':
        this.handleNotifications(this.settings[index].enabled);
        break;
      case 'Dark Mode':
        this.toggleDarkMode(this.settings[index].enabled);
        break;
      case 'Auto Update':
        this.handleAutoUpdate(this.settings[index].enabled);
        break;
    }
  }

  handleNotifications(enabled: boolean) {
    if (enabled) {
      console.log('Notifications enabled');
    } else {
      console.log('Notifications disabled');
    }
  }

  toggleDarkMode(enabled: boolean) {
    const body = document.body;
    if (enabled) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  handleAutoUpdate(enabled: boolean) {
    if (enabled) {
      console.log('Auto Update enabled');
    } else {
      console.log('Auto Update disabled');
    }
  }
}