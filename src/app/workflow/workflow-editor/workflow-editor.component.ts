import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'workflow-editor',
  templateUrl: './workflow-editor.component.html',
  styleUrls: ['./workflow-editor.component.sass'],
  providers: [PostService]
})
export class WorkflowEditorComponent implements OnInit {

  constructor(
    private ps: PostService
  ) {}

  ngOnInit() {
  }
  addPost( postTitle, postText ) {
      let post = {
          title: postTitle.value,
          text: postText.value
      };
      this.ps.addPost( post );
      postTitle.value = '';
      postText.value = '';
    }
}