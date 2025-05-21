import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-oflist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-oflist.component.html',
  styleUrl: './product-oflist.component.scss'
})
export class ProductOflistComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() link!: string;

  constructor(private router: Router) { }

  navigate() {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }
}