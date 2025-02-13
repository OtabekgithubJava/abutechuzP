import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video';

@Injectable({ providedIn: 'root' })
export class VideoService {
  private apiUrl = 'http://localhost:5182/api/video';

  constructor(private http: HttpClient) {}

  createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(`${this.apiUrl}/create`, video);
  }

  updateVideo(id: number, video: Video): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, video);
  }

  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/get/${id}`);
  }
}