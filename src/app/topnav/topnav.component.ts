import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass']
})
export class TopnavComponent implements OnInit {
  userName: any;
  state: string = '';
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.userName = user.displayName
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
