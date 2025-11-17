import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() businessName!: string;
  @Input() businessAddress!: any;
  @Input() heroTitle!: string;
  @Input() heroServices!: string[];
  @Input() isOpen!: boolean;

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}