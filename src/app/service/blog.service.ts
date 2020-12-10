import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Headline {
  headlineId: number;
  postId: number;
  postTitle: string;
  postContent: string;
  categoryId: number;
  categoryName: string;
}
export interface Category {
  categoryId: number;
  categoryName: string;
}
export interface Post {
  postId: number;
  postTitle: string;
  postContent: string;
  categoryId: number;
  categoryName: string;
}

@Injectable()
export class BlogService {
  apiUrl = 'http://sapapi-env.eba-9chpz82i.us-west-1.elasticbeanstalk.com/';

  constructor(private http: HttpClient) { }

  getHeadlines(): Observable<Headline[]> {
    return this.http.get<Headline[]>(this.apiUrl + 'headlines');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + 'categories');
  }

  getPosts(categoryId: string | null, cacheOn: boolean): Observable<Post[]> {
    let param = '';
    if (categoryId) {
      param = '?categoryId=' + categoryId;
    }
    if (cacheOn) {
      if (param) {
        param += '&';
      } else {
        param = '?';
      }
      param += 'cacheOn=true';
    }
    return this.http.get<Post[]>(this.apiUrl + 'posts' + param);
  }

  getCacheOn(): boolean {
    if (window.localStorage.getItem('blogCache')) { return true; }
    else { return false; }
  }

  toggleCacheOn(): void {
    if (this.getCacheOn()) { window.localStorage.removeItem('blogCache'); }
    else { window.localStorage.setItem('blogCache', 'true'); }
  }
}
