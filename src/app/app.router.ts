import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TestaComponent} from './components/testa/testa.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testa', component: TestaComponent },
  { path: 'page1', component: TestaComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes,
  {
    useHash: false,
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
  }
);
