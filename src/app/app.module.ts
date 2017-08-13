import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterLinkActive } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './_services/auth.service';
import { ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { WorkflowEditorComponent } from './workflow/workflow-editor/workflow-editor.component';
import { WorkflowPostsComponent } from './workflow/workflow-posts/workflow-posts.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAWjAJSY0ZazUau9q9OhfT_p6qkpuAmA2U",
  authDomain: "jonspace-7005e.firebaseapp.com",
  databaseURL: "https://jonspace-7005e.firebaseio.com",
  projectId: "jonspace-7005e",
  storageBucket: "jonspace-7005e.appspot.com",
  messagingSenderId: "170516293377"
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    WorkflowComponent,
    WorkflowEditorComponent,
    WorkflowPostsComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'workflow',
        component: WorkflowComponent
      },
      {
        path: 'members',
        component: MembersComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
