import { Injectable } from '@angular/core';
import { POSTS } from '../POSTS';

@Injectable()
export class PostService {
  getPosts() {
    return POSTS;
  }

  addPost( post ) {
    POSTS.push( post );
  }

  removePost( i ) {
    POSTS.splice( i, 1 );
  }
}