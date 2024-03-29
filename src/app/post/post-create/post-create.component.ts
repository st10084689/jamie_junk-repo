import { Component} from '@angular/core';
import { OnInit} from '@angular/core';
import { postService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{
enteredTitle= '';
enteredMessage=' ';
private mode = 'create';
private postId: string = '';
post: Post | undefined;

constructor(public postService: postService ,public route: ActivatedRoute){}

ngOnInit(){
  this.route.paramMap.subscribe((paramMap: ParamMap)=>
  {
      if(paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId')!;
        this.post = this.postService.getPost(this.postId);
      }
      else{
        this.mode = 'create';
        this.postId = null!;
      }
  });
}

addPost(){
  this.postService.addPost(this.enteredTitle,this.enteredMessage);
}
  
}
