import { Routes } from "@angular/router";

import { GalleryComponent } from "./app/gallery/gallery.component";
import { OurStoryComponent } from "./app/our-story/our-story.component";
import { WhenWhereComponent } from "./app/when-where/when-where.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'our-story', pathMatch: 'full' },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'when-where', component: WhenWhereComponent },
  { path: 'gallery', component: GalleryComponent },
]