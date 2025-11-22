import { AboutComponent } from './components/about-component/about-component';
import { HomeComponent } from './components/home-component/home-component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { StudntListComponent } from './components/studnt-list-component/studnt-list-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudntListComponent },
  { path: '**', component: NotFoundComponent },
];
