import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() productImageUrl: string = '';
  isLiked: boolean = false;
  
}
