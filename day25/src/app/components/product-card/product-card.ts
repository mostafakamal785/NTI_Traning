import { Component } from '@angular/core';
import { Input } from '@angular/core';
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  tags: string[];
  isFeatured: boolean;
  inStock: boolean;
}
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  isLiked: boolean = false;
  isAddedToCart: boolean = false;
  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  getStarClass(star: number): string {
    if (this.product.rating.rate < star) return 'text-gray-300';

    if (this.product.rating.rate <= 2) return 'text-red-500 animate-pulse';
    if (this.product.rating.rate === 3) return 'text-orange-500 animate-pulse';
    if (this.product.rating.rate >= 4) return 'text-green-500 animate-pulse';

    return 'text-yellow-500';
  }
  getcategory() {
    switch (this.product.category) {
      case "men's clothing":
        return "This is men's clothing";
      case "women's clothing":
        return "This is women's clothing";
      case 'jewelery':
        return 'This is an accessory';
      case 'electronics':
        return 'This is an electronic product';
      default:
        return 'Unknown category';
    }
  }
  addToCart() {
    this.isAddedToCart = !this.isAddedToCart;
  }
}
