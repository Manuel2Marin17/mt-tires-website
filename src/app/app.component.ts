import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  note?: string;
}

interface GalleryItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Signals for reactive state management
  businessName = signal('MT Tires Service LLC');
  businessPhone = signal('(555) 123-4567');
  heroTagline = signal('Locally Owned. Neighbor Approved.');
  heroTitle = signal(`What we do!`);
  heroServices = signal([
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5'
  ]);
  businessAddress = signal({
    street: '15095 Camino Real',
    city: 'Kyle, TX 78640',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=15095+Camino+Real,+Kyle,+TX+78640'
  });
  businessHours = signal([
    'Monday - Friday: 8am - 6pm',
    'Saturday: 9am - 4pm',
    'Sunday: Closed'
  ]);

  // Gallery items
  galleryItems = signal<GalleryItem[]>([
    {
      image: 'images/jobs/job1.webp',
      description: 'Professional tire installation and balancing'
    },
    {
      image: 'images/jobs/job2.webp',
      description: 'Expert wheel alignment service'
    },
    {
      image: 'images/jobs/job3.webp',
      description: 'Quality tire repair and maintenance'
    }
  ]);

  currentSlide = signal(0);

  // Services data using signals
  services = signal<Service[]>([
    {
      icon: 'build',
      title: 'Tire Installation',
      description: "New tires installed right the first time. We'll help you find the perfect match for your vehicle and budget."
    },
    {
      icon: 'balance',
      title: 'Wheel Balancing',
      description: "Smooth ride, no vibrations. We'll balance your wheels so you can enjoy the drive."
    },
    {
      icon: 'cached',
      title: 'Tire Rotation',
      description: 'Keep your tires wearing evenly and lasting longer with regular rotations.'
    },
    {
      icon: 'handyman',
      title: 'Flat Tire Repair',
      description: "Got a flat? We'll patch it up quick so you can get back on the road."
    },
    {
      icon: 'bolt',
      title: 'Tire Alignment',
      description: 'Proper alignment means better handling and longer tire life. Let us get you squared away.'
    },
    {
      icon: 'search',
      title: 'Tire Inspection',
      description: "Not sure about your tires? We'll check them out and give you honest advice on what you need."
    }
  ]);

  // About section paragraphs
  aboutParagraphs = signal<string[]>([
    "Hey there! We're MT Tires Service LLC, and we've been taking care of our neighbors' vehicles right here in the community. We're not a big chain or a corporate operation - we're just a local shop that cares about doing good work and treating people right.",
    "When you come to us, you're not just another ticket number. We take the time to explain what's going on with your tires, answer your questions (no matter how many you have!), and make sure you leave feeling confident and safe.",
    "We believe in honest service, fair prices, and building relationships that last. That's why so many of our customers keep coming back - and bringing their friends and family too."
  ]);

  // Contact information using signals
  contactInfo = signal<ContactInfo[]>([
    {
      icon: 'call',
      title: 'Phone',
      details: ['(555) 123-4567'],
      note: 'Call us anytime during business hours'
    },
    {
      icon: 'location_on',
      title: 'Location',
      details: ['15095 Camino Real', 'Kyle, TX 78640']
    },
    {
      icon: 'schedule',
      title: 'Hours',
      details: [
        'Monday - Friday: 8am - 6pm',
        'Saturday: 9am - 4pm',
        'Sunday: Closed'
      ]
    }
  ]);

  // Computed signal for current year
  currentYear = computed(() => new Date().getFullYear());

  // Computed signal for open/closed status
  isOpen = computed(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    // Sunday: Closed
    if (day === 0) return false;

    // Monday - Friday: 8am - 6pm
    if (day >= 1 && day <= 5) {
      return currentTime >= 8 && currentTime < 18;
    }

    // Saturday: 9am - 4pm
    if (day === 6) {
      return currentTime >= 9 && currentTime < 16;
    }

    return false;
  });

  // Navigation items
  navItems = signal([
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]);

  // Menu state
  isMenuOpen = signal(false);

  // Toggle menu
  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  // Close menu
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  // Smooth scroll to section
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu(); // Close menu when navigating
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Gallery navigation
  nextSlide(): void {
    const current = this.currentSlide();
    const total = this.galleryItems().length;
    this.currentSlide.set((current + 1) % total);
  }

  prevSlide(): void {
    const current = this.currentSlide();
    const total = this.galleryItems().length;
    this.currentSlide.set((current - 1 + total) % total);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
