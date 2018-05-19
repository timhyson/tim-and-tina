import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GiftsComponent } from './gifts/gifts.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhatWhereComponent } from './what-where/what-where.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'our-story',  component: OurStoryComponent },
  { path: 'what-where', component: WhatWhereComponent },
  { path: '',
    redirectTo: '/our-story',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    WhatWhereComponent,
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
