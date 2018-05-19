import { Routes } from '@angular/router';

import { GalleryComponent } from './app/gallery/gallery.component';
import { GiftsComponent } from './app/gifts/gifts.component';
import { OurStoryComponent } from './app/our-story/our-story.component';
import { WhatWhereComponent } from './app/what-where/what-where.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'our-story', pathMatch: 'full' },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'what-where', component: WhatWhereComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gifts', component: GiftsComponent }
];
