import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  imports: [MenubarModule, MenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  // Propiedades para los elementos de los menús
  menuItems: MenuItem[] = [];
  accessibilityItems: MenuItem[] = [];
  isMobile: boolean = false;                     // Propiedad para controlar si estamos en un dispositivo móvil

  constructor() {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', command: () => this.navigateTo('home') },
      { label: 'About', icon: 'pi pi-info', command: () => this.navigateTo('about') },
      { label: 'Contact', icon: 'pi pi-phone', command: () => this.navigateTo('contact') }
    ];

    // Inicializar los elementos del menú de accesibilidad
    this.accessibilityItems = [
      { label: 'Increase Font Size', icon: 'pi pi-search-plus', command: () => this.increaseFontSize() },
      { label: 'Decrease Font Size', icon: 'pi pi-search-minus', command: () => this.decreaseFontSize() }
    ];

    // Detectar si estamos en un dispositivo móvil (puedes mejorar esta lógica)
    this.isMobile = window.innerWidth <= 768;
  }

  // Método para navegar a las secciones de la página
  navigateTo(section: string): void {
    console.log(`Navigating to ${section}`);
    // Lógica para navegar a las secciones de la página
  }

  // Método para aumentar el tamaño de la fuente
  increaseFontSize(): void {
    console.log('Increasing font size');
    // Lógica para aumentar el tamaño de la fuente
  }

  // Método para disminuir el tamaño de la fuente
  decreaseFontSize(): void {
    console.log('Decreasing font size');
    // Lógica para disminuir el tamaño de la fuente
  }

  // Método para alternar el estado del menú hamburguesa
  toggleMenu(): void {
    console.log('Toggling menu');
    // Lógica para alternar el estado del menú hamburguesa
  }
}