import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, DoCheck } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent implements OnInit, OnDestroy, DoCheck {
  @Input() product!: Product;
  @Input() index!: number;
  @Output() productSelected = new EventEmitter<string>();
  @Output() productRemoved = new EventEmitter<number>();

  private changesDetected = 0;

  ngOnInit(): void {
    console.log(
      `🟢 ProductItem Component INITIALIZED - Product: ${this.product.name}, Price: $${this.product.price}`
    );
    console.log(`📦 Component #${this.index} is now in the DOM`);
  }

  ngDoCheck(): void {
    this.changesDetected++;
    console.log(
      `🔄 ProductItem Component CHECKED - Changes detected: ${this.changesDetected}, Product: ${this.product.name}`
    );
  }

  ngOnDestroy(): void {
    console.log(
      `🔴 ProductItem Component DESTROYED - Product: ${this.product.name}, Price: $${this.product.price}`
    );
    console.log(`🗑️ Component #${this.index} has been removed from the DOM`);
  }

  onSelect(): void {
    this.productSelected.emit(this.product.name);
  }

  onRemove(): void {
    this.productRemoved.emit(this.index);
  }
}
