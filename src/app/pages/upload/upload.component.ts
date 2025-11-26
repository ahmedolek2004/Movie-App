import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8 max-w-3xl">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">Upload a New Video</h1>

      <form (ngSubmit)="onSubmit()" #uploadForm="ngForm" class="bg-white p-6 rounded-lg shadow-lg">
        <div class="mb-6">
          <label for="videoTitle" class="block text-sm font-medium text-gray-700 mb-2">
            Video Title <span class="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            id="videoTitle"
            name="title"
            [(ngModel)]="formData.title"
            #title="ngModel"
            required
            minlength="3"
            placeholder="Enter video title"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            [class.border-red-500]="title.invalid && title.touched"
          >
          <span *ngIf="title.invalid && title.touched" class="text-red-600 text-sm">
            Title is required and must be at least 3 characters
          </span>
        </div>

        <div class="mb-6">
          <label for="videoDescription" class="block text-sm font-medium text-gray-700 mb-2">
            Description <span class="text-red-600">*</span>
          </label>
          <textarea 
            id="videoDescription"
            name="description"
            [(ngModel)]="formData.description"
            #description="ngModel"
            required
            minlength="10"
            rows="5"
            placeholder="Enter video description"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            [class.border-red-500]="description.invalid && description.touched"
          ></textarea>
          <span *ngIf="description.invalid && description.touched" class="text-red-600 text-sm">
            Description is required and must be at least 10 characters
          </span>
        </div>

        <div class="mb-6">
          <label for="videoFile" class="block text-sm font-medium text-gray-700 mb-2">
            Video File <span class="text-red-600">*</span>
          </label>
          <input 
            type="file" 
            id="videoFile"
            name="videoFile"
            (change)="onVideoFileChange($event)"
            accept="video/*"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          >
          <p class="text-sm text-gray-500 mt-1">Accepted formats: MP4, WebM, MOV. Max size: 100MB</p>
          <span *ngIf="videoFileError" class="text-red-600 text-sm">{{ videoFileError }}</span>
        </div>

        <div class="mb-6">
          <label for="thumbnailFile" class="block text-sm font-medium text-gray-700 mb-2">
            Thumbnail Image <span class="text-red-600">*</span>
          </label>
          <input 
            type="file" 
            id="thumbnailFile"
            name="thumbnailFile"
            (change)="onThumbnailChange($event)"
            accept="image/*"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          >
          <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, GIF. Max size: 5MB</p>
          <span *ngIf="thumbnailError" class="text-red-600 text-sm">{{ thumbnailError }}</span>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Thumbnail Preview</label>
          <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <img *ngIf="thumbnailPreview" [src]="thumbnailPreview" alt="Thumbnail preview" class="w-full h-full object-cover rounded-lg">
            <p *ngIf="!thumbnailPreview" class="text-gray-500">Preview will appear here</p>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button 
            type="button"
            (click)="router.navigate(['/'])"
            class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button 
            type="submit"
            [disabled]="uploadForm.invalid || uploading"
            class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ uploading ? 'Uploading...' : 'Upload Video' }}
          </button>
        </div>
      </form>

      <div *ngIf="showSuccess" class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
        <p class="font-bold">Success!</p>
        <p>Your video has been uploaded successfully.</p>
      </div>
    </div>
  `,
  styles: []
})
export class UploadComponent {
  formData = {
    title: '',
    description: ''
  };
  videoFile: File | null = null;
  thumbnailFile: File | null = null;
  thumbnailPreview: string | null = null;
  videoFileError = '';
  thumbnailError = '';
  uploading = false;
  showSuccess = false;

  constructor(public router: Router) {}

  onVideoFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.videoFileError = '';
      
      // Validate file type
      if (!file.type.startsWith('video/')) {
        this.videoFileError = 'Invalid file type. Please use a video file.';
        return;
      }
      
      // Validate file size (100MB)
      if (file.size > 100 * 1024 * 1024) {
        this.videoFileError = 'File size exceeds 100MB limit';
        return;
      }
      
      this.videoFile = file;
    }
  }

  onThumbnailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.thumbnailError = '';
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.thumbnailError = 'Invalid file type. Please use an image file.';
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.thumbnailError = 'File size exceeds 5MB limit';
        return;
      }
      
      this.thumbnailFile = file;
      
      // Preview thumbnail
      const reader = new FileReader();
      reader.onload = (e) => {
        this.thumbnailPreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.videoFile || !this.thumbnailFile) {
      return;
    }

    this.uploading = true;
    this.showSuccess = false;

    // Simulate upload
    setTimeout(() => {
      this.uploading = false;
      this.showSuccess = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.showSuccess = false;
        this.formData = { title: '', description: '' };
        this.videoFile = null;
        this.thumbnailFile = null;
        this.thumbnailPreview = null;
      }, 3000);
    }, 1500);
  }
}

