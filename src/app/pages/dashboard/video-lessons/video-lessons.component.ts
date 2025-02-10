import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-video-lessons',
  templateUrl: './video-lessons.component.html',
  styleUrls: ['./video-lessons.component.scss'],
})
export class VideoLessonsComponent {
  videos = [
    {
      id: '1',
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xyz123" frameborder="0" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts.',
      iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/abc456" frameborder="0" allowfullscreen></iframe>',
    },
  ];

  selectedVideo: { title: string; iframeCode: SafeHtml } | null = null;
  isAddEditModalOpen = false;
  isVideoModalOpen = false; // New property for video modal
  isEditing = false;
  currentVideo: { id: string; title: string; description: string; iframeCode: string } = {
    id: '',
    title: '',
    description: '',
    iframeCode: '',
  };

  constructor(private sanitizer: DomSanitizer) {}

  openVideoModal(video: { title: string; iframeCode: string }) {
    // Mark the iframe code as safe
    this.selectedVideo = {
      title: video.title,
      iframeCode: this.sanitizer.bypassSecurityTrustHtml(video.iframeCode),
    };
    this.isVideoModalOpen = true; // Open the video modal
  }

  closeVideoModal() {
    this.selectedVideo = null;
    this.isVideoModalOpen = false; // Close the video modal
  }

  openAddVideoModal() {
    this.isEditing = false;
    this.currentVideo = { id: '', title: '', description: '', iframeCode: '' };
    this.isAddEditModalOpen = true;
  }

  openEditVideoModal(video: { id: string; title: string; description: string; iframeCode: string }) {
    this.isEditing = true;
    this.currentVideo = { ...video };
    this.isAddEditModalOpen = true;
  }

  closeAddEditModal() {
    this.isAddEditModalOpen = false;
  }

  addVideo() {
    this.videos.push({ ...this.currentVideo, id: (this.videos.length + 1).toString() });
    this.closeAddEditModal();
  }

  updateVideo() {
    const index = this.videos.findIndex((v) => v.id === this.currentVideo.id);
    if (index !== -1) {
      this.videos[index] = { ...this.currentVideo };
    }
    this.closeAddEditModal();
  }

  deleteVideo(id: string) {
    this.videos = this.videos.filter((v) => v.id !== id);
  }
}