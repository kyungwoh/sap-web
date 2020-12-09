import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Post, BlogService } from './../service/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [ BlogService ]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const categoryId = paramMap.get('categoryId');
      console.log('categoryId', categoryId);
      if (categoryId) {
        this.getPosts(+categoryId);
      } else {
        this.getPosts(null);
      }
    });
  }

  getPosts(categoryId: number | null) {
    this.blogService.getPosts()
    .subscribe(
      (posts: Post[]) => { this.posts = posts; },
      (error: any) => { console.log('error', error); }
    );
  }
}
