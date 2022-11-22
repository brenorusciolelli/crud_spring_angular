import { first, tap, delay } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), tap(courses => console.log(courses)));
  }

  save(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }

  delete(course: Partial<Course>){
     this.httpClient.delete(this.API).subscribe(data =>{
      console.log(data);
    });
  }
}
