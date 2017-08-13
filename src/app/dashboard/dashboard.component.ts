import { POSTS } from './../POSTS';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [PostService]
})
export class DashboardComponent implements OnInit {
  constructor(private ps: PostService ) {}
  posts = this.ps.getPosts();
  ngOnInit() {
  }
}