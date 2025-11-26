import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VideoService, Video, Comment } from '../../services/video.service';
import { formatNumber, formatDate } from '../../shared/utils';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div *ngIf="loading" class="text-center py-12">
        <p class="text-gray-600">Loading video...</p>
      </div>

      <div *ngIf="!loading && video" class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column - Video Player -->
        <div class="flex-1">
          <div class="bg-black rounded-lg overflow-hidden mb-4">
            <video 
              [src]="video.videoUrl" 
              [poster]="video.thumbnail"
              controls 
              class="w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="mb-6">
            <h1 class="text-2xl font-bold mb-2 text-gray-800">{{ video.title }}</h1>
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div class="flex items-center space-x-4 text-gray-600">
                <span>{{ formatNumber(video.views) }} views</span>
                <span>{{ formatDate(video.uploadDate) }}</span>
              </div>
              <div class="flex items-center space-x-4">
                <button 
                  (click)="toggleLike()"
                  [class.bg-red-200]="isLiked"
                  class="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition">
                  <span>👍</span>
                  <span>{{ formatNumber(currentLikes) }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="border-t border-b py-4 mb-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-xl">👤</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">{{ video.channel }}</p>
                  <p class="text-sm text-gray-600">Subscribers</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg mb-6">
            <h2 class="font-bold mb-2 text-gray-800">Description</h2>
            <p class="text-gray-700 whitespace-pre-line">{{ video.description }}</p>
          </div>

          <div class="bg-white p-4 rounded-lg">
            <h2 class="font-bold mb-4 text-gray-800">
              Comments ({{ comments.length }})
            </h2>
            
            <form (ngSubmit)="addComment()" class="mb-6">
              <div class="flex space-x-2">
                <input 
                  type="text" 
                  [(ngModel)]="newComment"
                  name="comment"
                  placeholder="Add a comment..." 
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                >
                <button 
                  type="submit"
                  class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Comment
                </button>
              </div>
            </form>

            <div class="space-y-4">
              <div *ngFor="let comment of comments" class="border-b border-gray-200 pb-4 last:border-0">
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>👤</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center space-x-2 mb-1">
                      <span class="font-semibold text-gray-800">{{ comment.author }}</span>
                      <span class="text-sm text-gray-500">{{ formatDate(comment.date) }}</span>
                    </div>
                    <p class="text-gray-700">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
              <p *ngIf="comments.length === 0" class="text-gray-500">No comments yet. Be the first to comment!</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Suggested Videos -->
        <div class="lg:w-80">
          <h2 class="text-xl font-bold mb-4 text-gray-800">Suggested Videos</h2>
          <div class="space-y-4">
            <div *ngFor="let suggested of suggestedVideos" 
                 (click)="navigateToVideo(suggested.id)"
                 class="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
              <div class="flex-shrink-0 relative">
                <img [src]="suggested.thumbnail" [alt]="suggested.title" class="w-40 h-24 object-cover rounded">
                <span class="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded text-xs">
                  {{ suggested.duration }}
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-sm text-gray-800 line-clamp-2 mb-1">{{ suggested.title }}</h4>
                <p class="text-xs text-gray-600">{{ suggested.channel }}</p>
                <p class="text-xs text-gray-500">{{ formatNumber(suggested.views) }} views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class VideoComponent implements OnInit {
  video: Video | null = null;
  comments: Comment[] = [];
  suggestedVideos: Video[] = [];
  loading = true;
  currentLikes = 0;
  isLiked = false;
  newComment = '';
  formatNumber = formatNumber;
  formatDate = formatDate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadVideo(parseInt(id));
    }
  }

  loadVideo(id: number) {
    this.loading = true;
    this.videoService.getVideoById(id).subscribe({
      next: (video) => {
        if (video) {
          this.video = video;
          this.currentLikes = video.likes;
          this.loadComments(id);
          this.loadSuggestedVideos(id);
        } else {
          this.router.navigate(['/']);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/']);
      }
    });
  }

  loadComments(videoId: number) {
    this.videoService.getComments(videoId).subscribe({
      next: (comments) => {
        this.comments = comments;
      }
    });
  }

  loadSuggestedVideos(currentVideoId: number) {
    this.videoService.getVideos().subscribe({
      next: (videos) => {
        this.suggestedVideos = videos
          .filter(v => v.id !== currentVideoId)
          .slice(0, 5);
      }
    });
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.currentLikes += this.isLiked ? 1 : -1;
  }

  addComment() {
    if (!this.newComment.trim() || !this.video) return;

    const comment: Comment = {
      id: this.comments.length + 1,
      videoId: this.video.id,
      author: 'You',
      text: this.newComment.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    this.comments.push(comment);
    this.newComment = '';
  }

  navigateToVideo(id: number) {
    this.router.navigate(['/video', id]);
    this.loadVideo(id);
  }
}

