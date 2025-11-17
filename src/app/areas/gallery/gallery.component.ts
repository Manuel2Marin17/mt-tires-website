import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() galleryItems: GalleryItem[] = [];

  currentSlide = signal(0);

  // Gallery navigation methods
  nextSlide(): void {
    const current = this.currentSlide();
    const total = this.galleryItems.length;
    this.currentSlide.set((current + 1) % total);
  }

  prevSlide(): void {
    const current = this.currentSlide();
    const total = this.galleryItems.length;
    this.currentSlide.set((current - 1 + total) % total);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
