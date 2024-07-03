import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  items: MenuItem[] | undefined;
  isLogin: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.isLogin =  JSON.parse(localStorage.getItem('isLogin') || 'false');
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]

    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };

    
  }
}
