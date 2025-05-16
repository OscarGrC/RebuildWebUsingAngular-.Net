import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestros-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.scss']
})
export class NuestrosServiciosComponent {
  @Input() icon!: string;    // Ej: 'pi pi-wrench'
  @Input() label!: string;   // Ej: 'Servicio técnico'
  @Input() link!: string;    // Ej: '/servicio-tecnico'

  constructor(private router: Router) { }

  navigate() {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }
}
