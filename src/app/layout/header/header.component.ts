import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, MenuModule, CommonModule, Menu, ButtonModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  // Propiedades para los elementos de los menús
  menuItems: MenuItem[] = [];
  accessibilityItems: MenuItem[] = [];
  isMobile: boolean = false;                     // Propiedad para controlar si estamos en un dispositivo móvil
  ngOnInit(): void {



    this.accessibilityItems = [
      {
        label: 'Opciones de Accesibilidad',
        items: [
          {
            label: 'Increase Font Size',
            icon: 'pi pi-search-plus',
            command: () => this.increaseFontSize()
          },
          {
            label: 'Decrease Font Size', icon: 'pi pi-search-minus', command: () => this.decreaseFontSize()
          }
        ]
      }
    ];
  }
  constructor() {
    this.menuItems = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => this.navigateTo('inicio')
      },
      {
        label: 'Quiénes somos',
        command: () => this.navigateTo('quienes-somos')
      },
      {
        label: 'Mitsubishi Forklift Trucks',
        items: [
          { label: 'Uno', command: () => this.navigateTo('mitsubishi-uno') },
          { label: 'Dos', command: () => this.navigateTo('mitsubishi-dos') },
          { label: 'Tres', command: () => this.navigateTo('mitsubishi-tres') },
        ]
      },
      {
        label: 'Otras marcas',
        items: [
          { label: 'Uno', command: () => this.navigateTo('otras-marcas-uno') },
          { label: 'Dos', command: () => this.navigateTo('otras-marcas-dos') },
          { label: 'Tres', command: () => this.navigateTo('otras-marcas-tres') },
        ]
      },
      {
        label: 'Ocasión',
        command: () => this.navigateTo('ocasion')
      },
      {
        label: 'Tienda',
        icon: 'pi pi-shopping-cart',
        command: () => this.navigateTo('tienda')
      },
      {
        label: 'Servicios',
        icon: 'pi pi-briefcase',
        items: [
          { label: 'Uno', command: () => this.navigateTo('servicios-uno') },
          { label: 'Dos', command: () => this.navigateTo('servicios-dos') },
          { label: 'Tres', command: () => this.navigateTo('servicios-tres') },
        ]
      },
      {
        label: 'Blog',
        icon: 'pi pi-book',
        command: () => this.navigateTo('blog')
      },
      {
        label: 'Contactar 916 421 289',
        icon: 'pi pi-phone',
        command: () => this.navigateTo('contactar')
      },
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