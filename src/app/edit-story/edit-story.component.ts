import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { PostService } from './../post.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  private post: Post;
  private _postSubscription: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router, private _postService: PostService) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { post: Post }) => this.post = data.post);
  }

  updatePost(post: Post): void {
    post.id = this.post.id;
    post.author = this.post.author;
    post.categories = this.post.categories;
    post.likes = this.post.likes;
    post.media = this.post.media;
    this._unsubscribePostEdition();
    this._postSubscription = this._postService.update(post).subscribe(() => this._router.navigate(["/"]));
  }

  private _unsubscribePostEdition(): void {
    if (this._postSubscription) {
      this._postSubscription.unsubscribe();
    }
  }

}
