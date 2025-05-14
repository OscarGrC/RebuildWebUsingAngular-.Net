import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  slides = [
    {
      type: 'banner',
      image: 'logo.png',
      description: 'Desde 1995 dedicados a alquiler, venta y reparación de carretillas elevadoras.'
    },
    {
      type: 'service',
      title: 'Servicio ofical de',
      image: 'logomitsu.png',
      image2: 'https://madrilenademantenimiento.es/wp-content/uploads/2023/09/channels4_banner-1024x170.jpg',
    },
    {
      type: 'image',
      image: 'fre.png'
    },
    {
      type: 'image',
      image: 'manu.png'
    },
    {
      type: 'image',
      image: 'trans.png'
    }
  ];
}
