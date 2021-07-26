import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent, ButtonComponent],
    exports: [
        MenuComponent,
        FooterComponent,
        ButtonComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule { }
