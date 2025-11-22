import { Injectable } from '@angular/core';
import { Product } from '../components/product-item/product-item';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { name: 'MacBook Pro', price: 1999 },
    { name: 'iPhone 15', price: 999 },
    { name: 'AirPods Pro', price: 249 },
    { name: 'iPad Air', price: 599 },
    { name: 'Apple Watch', price: 399 },
    { name: 'iMac', price: 1299 },
    { name: 'Mac Mini', price: 699 },
    { name: 'Apple TV', price: 149 },
  ];

  constructor() {
    console.log('🛠️ ProductService initialized');
  }

  getProducts(): Product[] {
    console.log('📦 ProductService: Returning products list');
    return [...this.products];
  }

  getProductByName(name: string): Product | undefined {
    return this.products.find((product) => product.name === name);
  }

  addProduct(product: Product): void {
    console.log(`🆕 ProductService: Adding new product - ${product.name}`);
    this.products.push(product);
  }

  removeProductByName(name: string): void {
    console.log(`🗑️ ProductService: Removing product - ${name}`);
    const index = this.products.findIndex((product) => product.name === name);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  removeProductByIndex(index: number): Product | null {
    if (index >= 0 && index < this.products.length) {
      const removedProduct = this.products.splice(index, 1)[0];
      console.log(`🗑️ ProductService: Removed product at index ${index} - ${removedProduct.name}`);
      return removedProduct;
    }
    return null;
  }

  getProductsCount(): number {
    return this.products.length;
  }

  resetProducts(): void {
    console.log('🔄 ProductService: Resetting products to default');
    this.products = [
      { name: 'MacBook Pro', price: 1999 },
      { name: 'iPhone 15', price: 999 },
      { name: 'AirPods Pro', price: 249 },
      { name: 'iPad Air', price: 599 },
      { name: 'Apple Watch', price: 399 },
      { name: 'iMac', price: 1299 },
      { name: 'Mac Mini', price: 699 },
      { name: 'Apple TV', price: 149 },
    ];
  }
}
