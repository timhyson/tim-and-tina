import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval as observableInterval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit, OnDestroy {

  private date: Date;
  // Hardcode date: 31st May 2018 at 15:30 in Cyprus (UTC +3hrs)
  private dateString = '2018-05-31T15:30:00+03:00';
  private diff: number;
  private counter$: Observable<number>;
  private subscription: Subscription;
  public message: string;

  constructor() { }

  buildCounter(t) {
    let days, hours, minutes, seconds;
      days = Math.floor(t / (60 * 60 * 24));
      t -= days * 60 * 60 * 24;
      hours = Math.floor(t / (60 * 60)) % 24;
      t -= hours * 60 * 60;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;

      return [
        days + 'd',
        hours + 'h',
        minutes + 'm',
        seconds + 's'
      ].join(' ');
  }

  private getInterval(t): string {
    return t >= 0 ? this.buildCounter(t) : this.buildCounter(-t);
  }

  ngOnInit() {
    this.date = new Date(this.dateString);
    this.counter$ = observableInterval(1000).pipe(map((x) => {
      this.diff = Math.floor((this.date.getTime() - new Date().getTime()) / 1000);
      return x;
    }));

    this.subscription = this.counter$.subscribe((x) => this.message = this.getInterval(this.diff));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
