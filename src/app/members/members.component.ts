import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.name = user;
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