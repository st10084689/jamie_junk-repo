import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {WorkExperience} from './work-experience.model';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({providedIn: 'root'})
export class WorkExperienceService{
  private work : WorkExperience[] = [];
  private workUpdated = new Subject<WorkExperience[]>();
  constructor(private http: HttpClient){}

getPosts() {
    this.http
      .get<{ message: string; work: any }>(
        "http://localhost:3000/api/work"
      )
      .pipe(map((workData) => {
        return workData.work.map((work: { title: any; company:any; startDate: any; endDate: any; content: any; _id: any; }) => {
          return {
            title: work.title,
            company: work.company,
            startDate: work.startDate,
            endDate: work.endDate,
            content: work.content,
            id: work._id
          };
        });
      }))
      .subscribe(transformedWork => {
        this.work = transformedWork;
        this.workUpdated.next([...this.work]);
      });
  }

  getPostUpdateListener() {
    return this.workUpdated.asObservable();
  }
}