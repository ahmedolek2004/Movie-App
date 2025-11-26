import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { VideoService, Video, User } from '../../services/video.service';
import { formatNumber } from '../../shared/utils';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div class="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
            <img *ngIf="user?.avatar" [src]="user?.avatar" [alt]="user?.name || 'User'" class="w-32 h-32 rounded-full object-cover">
            <span *ngIf="!user?.avatar" class="text-5xl">👤</span>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ user?.name || 'Loading...' }}</h1>
            <p class="text-gray-600 mb-4">{{ user?.email }}</p>
            <p class="text-gray-700 mb-4">{{ user?.bio }}</p>
            <div class="flex items-center space-x-6 justify-center md:justify-start">
              <div>
                <p class="text-2xl font-bold text-gray-800">{{ formatNumber(user?.subscribers || 0) }}</p>
                <p class="text-sm text-gray-600">Subscribers</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-800">{{ userVideos.length }}</p>
                <p class="text-sm text-gray-600">Videos</p>
              </div>
            </div>
          </div>
          <div>
            <button 
              (click)="openEditModal()"
              class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">My Videos</h2>
        <div *ngIf="userVideos.length > 0" 
             class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div *ngFor="let video of userVideos" 
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
        <div *ngIf="userVideos.length === 0" class="text-center py-12 bg-white rounded-lg">
          <p class="text-xl text-gray-600">You haven't uploaded any videos yet.</p>
          <a routerLink="/upload" class="text-red-600 hover:underline mt-4 inline-block">Upload your first video</a>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div *ngIf="showEditModal" 
         (click)="closeEditModal($event)"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div (click)="$event.stopPropagation()" class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Edit Profile</h2>
        <form (ngSubmit)="saveProfile()" #editForm="ngForm">
          <div class="mb-4">
            <label for="editName" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              id="editName"
              name="name"
              [(ngModel)]="editData.name"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
          </div>
          <div class="mb-4">
            <label for="editEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="editEmail"
              name="email"
              [(ngModel)]="editData.email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
          </div>
          <div class="mb-4">
            <label for="editBio" class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea 
              id="editBio"
              name="bio"
              [(ngModel)]="editData.bio"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>
          <div class="flex justify-end space-x-4">
            <button 
              type="button"
              (click)="closeEditModal()"
              class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  userVideos: Video[] = [];
  showEditModal = false;
  editData = {
    name: '',
    email: '',
    bio: ''
  };
  formatNumber = formatNumber;

  constructor(
    private videoService: VideoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.videoService.getUser().subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
          this.editData = {
            name: user.name,
            email: user.email,
            bio: user.bio
          };
          this.loadUserVideos(user.uploadedVideos || []);
        }
      }
    });
  }

  loadUserVideos(videoIds: number[]) {
    this.videoService.getVideos().subscribe({
      next: (videos) => {
        this.userVideos = videos.filter(v => videoIds.includes(v.id));
      }
    });
  }

  openEditModal() {
    this.showEditModal = true;
  }

  closeEditModal(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showEditModal = false;
  }

  saveProfile() {
    if (this.user) {
      this.user.name = this.editData.name;
      this.user.email = this.editData.email;
      this.user.bio = this.editData.bio;
      this.closeEditModal();
      alert('Profile updated successfully!');
    }
  }

  navigateToVideo(id: number) {
    this.router.navigate(['/video', id]);
  }
}

