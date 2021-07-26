import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from './components/footer/footer.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule { }
