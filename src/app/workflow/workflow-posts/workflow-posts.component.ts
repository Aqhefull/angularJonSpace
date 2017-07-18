import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'workflow-posts',
  templateUrl: './workflow-posts.component.html',
  styleUrls: ['./workflow-posts.component.sass'],
  providers: [PostService]
})
export class WorkflowPostsComponent implements OnInit {

    constructor( private ps: PostService ) {}

  posts = this.ps.getPosts();

  ngOnInit() {
  }

  removePost( i ) {
    this.ps.removePost( i );
  }
}