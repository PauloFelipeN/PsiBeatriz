import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Graça Beatriz | Psicóloga para Mulheres', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage) },
  { path: 'politica-de-privacidade', title: 'Política de Privacidade | Graça Beatriz', loadComponent: () => import('./features/privacy/privacy.page').then((m) => m.PrivacyPage) },
  { path: '**', redirectTo: '' },
];
