import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, BlogService } from './../service/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [ BlogService ]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  responseTime = 'loading...';

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.route.paramMap.subscribe(paramMap => {
      const startDate = new Date();
      this.blogService.getPosts(paramMap.get('categoryId'), this.getCacheOn())
      .subscribe(
        (posts: Post[]) => {
          const endDate = new Date();
          if (endDate.getTime() > startDate.getTime()) {
            this.responseTime = (endDate.getTime() - startDate.getTime()) + 'ms';
          }
          this.posts = posts;
        },
        (error: any) => { console.log('error', error); }
      );
    });
  }

  getCacheOn(): boolean {
    return this.blogService.getCacheOn();
  }

  toggleCacheOn(): void {
    this.blogService.toggleCacheOn();
    this.getPosts();
  }
}
