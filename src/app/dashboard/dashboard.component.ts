import { POSTS } from './../POSTS';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [PostService]
})
export class DashboardComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, private ps: PostService ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.name = user;
      }
    });
  }

  posts = this.ps.getPosts();

  logout() {
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}