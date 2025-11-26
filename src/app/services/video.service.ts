import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  channel: string;
  description: string;
  likes: number;
  videoUrl: string;
}

export interface Comment {
  id: number;
  videoId: number;
  author: string;
  text: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  subscribers: number;
  uploadedVideos: number[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<{ videos: Video[] }>(this.dataUrl).pipe(
      map(data => data.videos || []),
      catchError(() => of([]))
    );
  }

  getVideoById(id: number): Observable<Video | null> {
    return this.getVideos().pipe(
      map(videos => videos.find(v => v.id === id) || null)
    );
  }

  searchVideos(query: string): Observable<Video[]> {
    const lowerQuery = query.toLowerCase().trim();
    return this.getVideos().pipe(
      map(videos => videos.filter(video => 
        video.title.toLowerCase().includes(lowerQuery) ||
        video.description.toLowerCase().includes(lowerQuery) ||
        video.channel.toLowerCase().includes(lowerQuery)
      ))
    );
  }

  getComments(videoId: number): Observable<Comment[]> {
    return this.http.get<{ comments: Comment[] }>(this.dataUrl).pipe(
      map(data => (data.comments || []).filter(c => c.videoId === videoId)),
      catchError(() => of([]))
    );
  }

  getUser(): Observable<User | null> {
    return this.http.get<{ user: User }>(this.dataUrl).pipe(
      map(data => data.user || null),
      catchError(() => of(null))
    );
  }

  getUserVideos(userId: number): Observable<Video[]> {
    return combineLatest([this.getUser(), this.getVideos()]).pipe(
      map(([user, videos]) => {
        if (!user || !user.uploadedVideos) return [];
        return videos.filter(v => user.uploadedVideos.includes(v.id));
      })
    );
  }
}

