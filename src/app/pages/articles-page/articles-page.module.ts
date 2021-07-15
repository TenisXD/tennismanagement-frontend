import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesPageComponent} from './articles-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [{path: '', component: ArticlesPageComponent}];

@NgModule({
  declarations: [ArticlesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ArticlesPageModule { }
