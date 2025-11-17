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
  businessPhone = signal('(512) 787-2924');
  heroTagline = signal('Locally Owned. Neighbor Approved.');
  heroTitle = signal(`What we do!`);
  heroServices = signal([
    'Alignment and Balancing for Heavy and Light Trucks',
    'Brake Service and Replacement',
    'Shock and Strut Replacement',
    'DOT Inspections (for Commercial Vehicles)',
    'And more...'
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
      icon: 'cached',
      title: 'Tire Mounting, Rotation, and Balancing',
      description: 'Montaje, rotación y balanceo de llantas'
    },
    {
      icon: 'handyman',
      title: 'Flat Tire Repair and Patching',
      description: 'Reparación y parchado de llantas ponchadas'
    },
    {
      icon: 'balance',
      title: 'Alignment and Balancing for Heavy and Light Trucks',
      description: 'Alineación y balanceo en trocas pesadas y ligeras'
    },
    {
      icon: 'build',
      title: 'Tire Service for Commercial Trucks and Cars',
      description: 'Servicio de llantas para camiones comerciales y carros'
    },
    {
      icon: 'water_drop',
      title: 'Oil and Filter Changes',
      description: 'Cambio de aceites y filtros'
    },
    {
      icon: 'stop_circle',
      title: 'Brake Service and Replacement',
      description: 'Servicio y reemplazo de frenos. Pads, rotors, drums, shoes, and brake fluid service. Pastillas, discos, tambores, zapatas y cambio de líquido de frenos.'
    },
    {
      icon: 'construction',
      title: 'General Suspension Repair',
      description: 'Reparación de suspensión en general. Includes installation of bushings, king pins, springs, brakes, drums, and rotors. Incluye instalación de bujes, king pins, muelles, frenos, tambores y discos.'
    },
    {
      icon: 'bolt',
      title: 'Shock and Strut Replacement',
      description: 'Reemplazo de amortiguadores y struts'
    },
    {
      icon: 'navigation',
      title: 'Steering System Inspection and Repair',
      description: 'Inspección y reparación del sistema de dirección'
    },
    {
      icon: 'settings',
      title: 'Wheel Bearing and Hub Service',
      description: 'Servicio de rodamientos y mazas de ruedas'
    },
    {
      icon: 'tune',
      title: 'Engine Tune-Ups',
      description: 'Ajustes y afinación de motor'
    },
    {
      icon: 'sync_alt',
      title: 'Transmission Service (Fluid and Filter)',
      description: 'Servicio de transmisión (fluido y filtro)'
    },
    {
      icon: 'drive_eta',
      title: 'Differential and Driveline Service',
      description: 'Servicio de diferencial y línea motriz'
    },
    {
      icon: 'verified_user',
      title: 'DOT Inspections (for Commercial Vehicles)',
      description: 'Inspecciones DOT (para vehículos comerciales)'
    },
    {
      icon: 'computer',
      title: 'Computer Diagnostics and Check Engine Light',
      description: 'Diagnóstico computarizado y revisión de la luz de motor'
    },
    {
      icon: 'home_repair_service',
      title: 'General Maintenance and Repair',
      description: 'Mantenimiento y reparación en general'
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
      details: ['(512) 787-2924'],
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
