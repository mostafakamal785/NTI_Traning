import { Component } from '@angular/core';
import { ProductList } from '../../components/product-list/product-list';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [ProductList,Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
