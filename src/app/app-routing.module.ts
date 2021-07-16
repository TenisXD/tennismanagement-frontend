import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles-page/articles-page.module').then(m => m.ArticlesPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players-page/players-page.module').then(m => m.PlayersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
