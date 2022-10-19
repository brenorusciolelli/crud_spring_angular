import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course [] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-end' },
      { _id: '2', name: 'React', category: 'Front-end' },
      { _id: '3', name: 'Java', category: 'Back-end' },
      { _id: '4', name: 'Spring Boot', category: 'Back-end' },
      { _id: '5', name: 'Jenkins', category: 'DevOps' }
    ]
  }

}
