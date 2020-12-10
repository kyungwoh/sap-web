import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headline, BlogService } from './../service/blog.service';

@Component({
  selector: 'app-headline-list',
  templateUrl: './headline-list.component.html',
  styleUrls: ['./headline-list.component.scss'],
  providers: [ BlogService ]
})
export class HeadlineListComponent implements OnInit {
  headlines: Headline[] = [];

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getHeadlines()
    .subscribe(
      (headlines: Headline[]) => { this.headlines = headlines; },
      (error: any) => { console.log('error', error); }
    );
  }
}
