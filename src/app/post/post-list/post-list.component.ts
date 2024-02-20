import { Component} from '@angular/core';
import {OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts:Post[] = [];
  private postSub: Subscription = null!;

 constructor(public postsService:postService){}
 ngOnInit(): void {
   this.postsService.getPosts();
   this.postSub =this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
     this.Posts = posts
   })
 }
 ngOnDestroy() {
  this.postSub.unsubscribe();
}

onDelete(postId?: String) {
  this.postsService.deletePost(postId);
}
}
