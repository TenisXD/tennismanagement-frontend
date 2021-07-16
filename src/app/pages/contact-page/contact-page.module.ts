import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageComponent} from './contact-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [{path: '', component: ContactPageComponent}];

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContactPageModule { }
