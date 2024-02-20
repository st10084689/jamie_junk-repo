import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperience } from './work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  Work:WorkExperience[] = [];
  private workSub: Subscription = null!;

 constructor(public workService:WorkExperienceService){}
 ngOnInit(): void {
   this.workService.getPosts();
   this.workSub =this.workService.getPostUpdateListener().subscribe((work:WorkExperience[])=>{
     this.Work = work
   })
 }
 ngOnDestroy() {
  this.workSub.unsubscribe();
}

}
