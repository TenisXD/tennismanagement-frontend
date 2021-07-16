import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PlayersPageComponent} from './players-page.component';

const routes: Routes = [{path: '', component: PlayersPageComponent}];

@NgModule({
  declarations: [
    PlayersPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlayersPageModule { }
