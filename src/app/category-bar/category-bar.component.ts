import { Component, OnInit } from '@angular/core';
import { Category, BlogService } from './../service/blog.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss'],
  providers: [ BlogService ]
})
export class CategoryBarComponent implements OnInit {
  categories : Category[] = [];
  blogCache = false;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    if (window.localStorage.getItem('blogCache')) this.blogCache = true;
    console.log(this.blogCache);
    // window.localStorage.setItem('blogCache', 'true');
    // window.localStorage.removeItem('blogCache');

    this.blogService.getCategories()
    .subscribe(
      (categories: Category[]) => { this.categories = categories; },
      (error: any) => { console.log('error', error); }
    );
  }
}
