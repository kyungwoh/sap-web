import { Component, OnInit } from '@angular/core';
import { Category, BlogService } from './../service/blog.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss'],
  providers: [ BlogService ]
})
export class CategoryBarComponent implements OnInit {
  categories: Category[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getCategories()
    .subscribe(
      (categories: Category[]) => { this.categories = categories; },
      (error: any) => { console.log('error', error); }
    );
  }
}
