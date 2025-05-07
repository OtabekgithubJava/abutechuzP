import { Component } from '@angular/core';

@Component({
  selector: 'app-examples-carusel',
  templateUrl: './examples-carusel.component.html',
  styleUrls: ['./examples-carusel.component.scss']
})
export class ExamplesCaruselComponent {
  activeIndex = 0;
  images = [
    { src: 'images/students.jpg', alt: 'Image 1' },
    { src: 'images/image1.jpeg', alt: 'Image 2' },
    { src: 'images/image2.jpeg', alt: 'Image 3' }
  ];

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

}