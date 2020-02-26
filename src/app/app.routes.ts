import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    { path: 'lanzamientos', component: HomeComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'lanzamientos' },
    { path: '**', pathMatch: 'full', redirectTo: 'lanzamientos' }
];