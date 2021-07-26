import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public screenWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    this.screenWidth = window.innerWidth;
  }

  constructor() {
    this.getScreenSize();
  }
}
