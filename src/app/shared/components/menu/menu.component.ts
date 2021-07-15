import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../models/menu-item';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      name: 'Home',
      link: '',
      icon: 'home'
    },
    {
      name: 'Articles',
      link: 'articles',
      icon: 'article'
    },
    {
      name: 'Contact',
      link: 'contact',
      icon: 'contact_page'
    },
    {
      name: 'Players',
      link: 'players',
      icon: 'sports_tennis'
    }
  ];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  async navigate(item?: MenuItem): Promise<void> {
    await this.router.navigate([item ? item.link : '']);
  }

}
