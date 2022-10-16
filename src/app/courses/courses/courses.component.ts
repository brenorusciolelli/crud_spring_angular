import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'React', category: 'Front-end'},
    {_id: '3', name: 'Java', category: 'Back-end'},
    {_id: '4', name: 'Spring Boot', category: 'Back-end'},
    {_id: '5', name: 'Jenkins', category: 'DevOps'},
  ];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
