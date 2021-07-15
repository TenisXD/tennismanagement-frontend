import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module')
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module')
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles-page/articles-page.module')
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players-page/players-page.module')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
