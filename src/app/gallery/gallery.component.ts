import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl('VCNNxglhlwA');
  }

  ngOnInit() {
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as close as possible
    // to the input data so that it's easier to check if the value is safe.
    this.dangerousVideoUrl = `https://www.youtube.com/embed/${id}` +
      `?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1`;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
}
