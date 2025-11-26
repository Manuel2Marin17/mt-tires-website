import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTime } from 'luxon';
import { HeaderComponent } from './areas/header/header.component';
import { HeroComponent } from './areas/hero/hero.component';
import { ServicesComponent } from './areas/services/services.component';
import { GalleryComponent } from './areas/gallery/gallery.component';
import { AboutComponent } from './areas/about/about.component';
import { ContactComponent } from './areas/contact/contact.component';
import { FooterComponent } from './areas/footer/footer.component';

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
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
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
    'Monday - Friday: 8am - 5pm',
    'Saturday: 8am - 12pm',
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
        'Monday - Friday: 8am - 5pm',
        'Saturday: 8am - 12pm',
        'Sunday: Closed'
      ]
    }
  ]);

  // Computed signal for current year
  currentYear = computed(() => new Date().getFullYear());

  // Computed signal for open/closed status (uses Central Time)
  isOpen = computed(() => {
    // Get current time in Central Time (America/Chicago)
    const now = DateTime.now().setZone('America/Chicago');
    const day = now.weekday; // 1 = Monday, 7 = Sunday (Luxon uses ISO weekday)
    const currentTime = now.hour + now.minute / 60;

    // Sunday: Closed (weekday 7)
    if (day === 7) return false;

    // Monday - Friday: 8am - 5pm (weekday 1-5)
    if (day >= 1 && day <= 5) {
      return currentTime >= 8 && currentTime < 17;
    }

    // Saturday: 8am - 12pm (weekday 6)
    if (day === 6) {
      return currentTime >= 8 && currentTime < 12;
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

}
