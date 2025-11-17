import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  note?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contactInfo: ContactInfo[] = [];
}
