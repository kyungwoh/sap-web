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

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts');
  }
}