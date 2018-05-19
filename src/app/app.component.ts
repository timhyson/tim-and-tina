import { Component, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wedding = { name: 'tim + tina' };
  menuItems: IMenuItem[];

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];

  constructor(private router: Router) {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
      { name: 'Our Story', route: '/our-story' },
      { name: 'What\'s where', route: '/what-where' },
      { name: 'Gallery', route: '/gallery' },
      { name: 'Gifts', route: '/gifts' }
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'UA-119158500-1', {
          'page_title' : 'TimAndTina',
          'page_path': event.urlAfterRedirects
        })
      }
    });
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
}

export interface IMenuItem {
  name: string;
  route: string;
}
