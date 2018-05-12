import { Component, EventEmitter } from '@angular/core';

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

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
      { name: 'Our Story', route: '/our-story' },
      { name: 'What\'s where', route: '/what-where' },
      { name: 'Gallery', route: '/gallery' },
    ];
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
}

export interface IMenuItem {
  name: string;
  route: string;
}
