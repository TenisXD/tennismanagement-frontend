import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [MenuComponent],
    exports: [
        MenuComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule { }
