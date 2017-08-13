import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';
  isLog: boolean;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.isLog = true;
        return this.isLog;
      } else {
        this.isLog = false;
        return this.isLog;
      }
    });
  }
}
