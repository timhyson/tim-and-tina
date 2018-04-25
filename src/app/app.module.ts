import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { GalleryComponent } from './gallery/gallery.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhenWhereComponent } from './when-where/when-where.component';
import { GiftsComponent } from './gifts/gifts.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'our-story',  component: OurStoryComponent },
  { path: 'when-where', component: WhenWhereComponent },
  { path: '',
    redirectTo: '/our-story',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    WhenWhereComponent,
    GalleryComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
