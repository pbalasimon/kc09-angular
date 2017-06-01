import { Component, AfterContentChecked, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-likes',
  templateUrl: './post-likes.component.html',
  styleUrls: ['./post-likes.component.css']
})
export class PostLikesComponent implements AfterContentChecked {

  @Input() post: Post;
  private userPostLiked: boolean = false;
  private readonly DEFAULT_ID_USER: number = 0;
  @Output() private whenPostLiked: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngAfterContentChecked() {
    this.userPostLiked = this.post.likes.indexOf(this.DEFAULT_ID_USER) != -1;
  }

  like(post: Post) {
    this.whenPostLiked.emit(post);
  }

}
