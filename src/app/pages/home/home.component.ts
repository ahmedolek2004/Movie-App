import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { VideoService, Video } from '../../services/video.service';
import { formatNumber } from '../../shared/utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Trending Videos</h1>
      
      <div *ngIf="loading" class="text-center py-12">
        <p class="text-gray-600">Loading videos...</p>
      </div>

      <div *ngIf="!loading && videos.length > 0" 
           class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div *ngFor="let video of videos" 
             (click)="navigateToVideo(video.id)"
             class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
          <div class="relative">
            <img [src]="video.thumbnail" [alt]="video.title" class="w-full h-48 object-cover">
            <span class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {{ video.duration }}
            </span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2">{{ video.title }}</h3>
            <p class="text-sm text-gray-600">{{ video.channel }}</p>
            <p class="text-sm text-gray-500">{{ formatNumber(video.views) }} views</p>
          </div>
        </div>
      </div>

      <div *ngIf="!loading && videos.length === 0" class="text-center py-12">
        <p class="text-xl text-gray-600">No videos found. Try a different search term.</p>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];
  loading = true;
  formatNumber = formatNumber;

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.searchVideos(searchQuery);
      } else {
        this.loadVideos();
      }
    });
  }

  loadVideos() {
    this.loading = true;
    this.videoService.getVideos().subscribe({
      next: (videos) => {
        this.videos = videos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  searchVideos(query: string) {
    this.loading = true;
    this.videoService.searchVideos(query).subscribe({
      next: (videos) => {
        this.videos = videos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  navigateToVideo(id: number) {
    this.router.navigate(['/video', id]);
  }
}

