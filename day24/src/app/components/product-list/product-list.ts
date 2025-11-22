import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    { name: 'Product 1', price: 299.99, imageUrl: 'https://placehold.co/300x300', id: 1 },
    { name: 'Product 2', price: 492.99, imageUrl: 'https://placehold.co/300x300', id: 2 },
    { name: 'Product 3', price: 194.99, imageUrl: 'https://placehold.co/300x300', id: 3 },
    { name: 'Product 4', price: 229.99, imageUrl: 'https://placehold.co/300x300', id: 4 },
    { name: 'Product 5', price: 459.99, imageUrl: 'https://placehold.co/300x300', id: 5 },
    { name: 'Product 6', price: 139.99, imageUrl: 'https://placehold.co/300x300', id: 6 },
    { name: 'Product 7', price: 279.99, imageUrl: 'https://placehold.co/300x300', id: 7 },
    { name: 'Product 8', price: 498.99, imageUrl: 'https://placehold.co/300x300', id: 8 },
  ];
}
