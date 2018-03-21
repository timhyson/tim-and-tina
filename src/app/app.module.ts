import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhenWhereComponent } from './when-where/when-where.component';

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    WhenWhereComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'our-story', pathMatch: 'full' },
      { path: 'our-story', component: OurStoryComponent },
      { path: 'when-where', component: WhenWhereComponent }
    ]),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
