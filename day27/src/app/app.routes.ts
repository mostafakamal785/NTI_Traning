import { Routes } from '@angular/router';
import { PostViewerComponent } from './components/post-viewer/post-viewer';
import { ProductList } from './components/product-list/product-list';

export const routes: Routes = [
  { path: '', component: ProductList},
  { path: 'posts', component: PostViewerComponent },
];
