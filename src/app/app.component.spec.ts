import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { OurStoryComponent } from "./our-story/our-story.component";
import { WhenWhereComponent } from './when-where/when-where.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        OurStoryComponent,
        WhenWhereComponent
      ],
      imports: [
        MaterializeModule,
        RouterTestingModule.withRoutes([
          {path: '', component: OurStoryComponent},
          {path: 'our-story', component: OurStoryComponent},
          {path: 'when-where', component: WhenWhereComponent}
        ])
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render menu in an anchor tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('OUR WEDDING');
  }));
});
