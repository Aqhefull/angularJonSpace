import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe((user: firebase.User)  => {
      if (user) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(
      (success) => {
        this.router.navigate(['/dashboard']);
      }).catch(
      (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigate(['/dashboard']);
      }).catch(
      (err) => {
        this.error = err;
      });
  }
  ngOnInit() {
  }

}
