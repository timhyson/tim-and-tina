import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DisqusModule } from "ngx-disqus";

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { GalleryComponent } from './gallery/gallery.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhenWhereComponent } from './when-where/when-where.component';

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    WhenWhereComponent,
    GalleryComponent,
    GuestbookComponent
  ],
  imports: [
    BrowserModule,,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DisqusModule.forRoot('timandtina'),
    MaterializeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'our-story', pathMatch: 'full' },
      { path: 'our-story', component: OurStoryComponent },
      { path: 'when-where', component: WhenWhereComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'guestbook', component: GuestbookComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
