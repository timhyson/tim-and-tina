import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sendEvent() {
    (<any>window).gtag('event', 'click', {
      'event_category': 'guestList',
      'event_label': 'guestList',
      'value': 0
    });
  }
}
