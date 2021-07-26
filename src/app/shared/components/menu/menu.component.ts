import {Component, HostListener, OnInit} from '@angular/core';
import {MenuItem} from '../../../models/menu-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Acasă',
      link: '',
      icon: 'home'
    },
    {
      name: 'Articole',
      link: 'articles',
      icon: 'article'
    },
    {
      name: 'Contact',
      link: 'contact',
      icon: 'contact_page'
    },
    {
      name: 'Jucători',
      link: 'players',
      icon: 'sports_tennis'
    }
  ];
  selectedItem: MenuItem = this.menuItems[0];
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    this.screenWidth = window.innerWidth;
  }

  constructor(private readonly router: Router) {
    this.getScreenSize();
  }

  async navigate(item?: MenuItem): Promise<void> {
    this.selectedItem = item ? item : this.menuItems[0];
    await this.router.navigate([item ? item.link : '']);
  }
}
